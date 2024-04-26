import { generateId } from "lucia";
import { discord } from "@/app/lib/auth/oauth";
import { OAuth2RequestError } from "arctic";
import { lucia } from "@/app/lib/auth/auth";

import { db } from "@/server/db";

import { cookies } from "next/headers";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export interface DiscordUser {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  accent_color?: string;
}

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("discord_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await discord.validateAuthorizationCode(code);
    const discordUserResponse = await fetch(
      "https://discord.com/api/users/@me",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );
    const discordUserGuildsResponse = await fetch(
      "https://discord.com/api/users/@me/guilds",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );
    const discordUserGuilds =
      (await discordUserGuildsResponse.json()) as DiscordGuild[];

    const discordUser = (await discordUserResponse.json()) as DiscordUser;
    discordUser.avatar = `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`;

    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, discordUser.id),
    });

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);

      await db
        .update(users)
        .set({ guilds: JSON.stringify(discordUserGuilds) })
        .where(eq(users.id, existingUser.id));

      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/dashboard",
        },
      });
    }

    await db.insert(users).values({
      id: discordUser.id,
      username: discordUser.username,
      email: discordUser.email,
      avatar: discordUser.avatar,
      accent_color: discordUser.accent_color,
      guilds: JSON.stringify(discordUserGuilds),
    });

    const session = await lucia.createSession(discordUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/dashboard",
      },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      console.log(e);
      return new Response(null, {
        status: 400,
      });
    }
    console.log(e);
    return new Response(null, {
      status: 500,
    });
  }
}
