import { Discord } from "arctic";
import { env } from "@/env";

export const discord = new Discord(
  env.DISCORD_CLIENT_ID,
  env.DISCORD_CLIENT_SECRET,
  "http://localhost:3000/login/discord/callback",
);
