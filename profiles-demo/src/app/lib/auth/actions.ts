"use server";

import { cookies } from "next/headers";
import { cache } from "react";

import type { Session, User } from "lucia";
import { lucia } from "./auth";
import { redirect } from "next/navigation";

export const getAuth = cache(
  async (): Promise<{ user: User; session: Session }> => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) redirect("/");

    const { user, session } = await lucia.validateSession(sessionId);
    try {
      if (session?.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
      if (session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch {}
    if (user && session) return { user, session };
    else redirect("/");
  },
);

export async function logout(): Promise<{ error: string | null }> {
  "use server";
  const { session } = await getAuth();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}
