"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
// Components
import Navbar from "@/components/Navbar";
import { Button } from "@/components/common/Button";
// Icons
import { BsGithub, BsDiscord } from "react-icons/bs";

export default function Login () {
    return (
        <main>
            <Navbar />
            <section className="px-5 py-44">
                <h1 className="text-5xl text-zinc-100 font-semibold text-center tracking-tighter mb-16">Log in to GameIO</h1>
                <div className="flex flex-wrap justify-center space-y-5 mb-20">
                    <div className="w-full text-center">
                        <Button onClick={() => signIn("github", { callbackUrl: "/games" })} size="lg" variant="github">
                            <BsGithub className="me-2" /> Continue with Github
                        </Button>
                    </div>
                    <div className="w-full text-center">
                        <Button onClick={() => signIn("discord", { callbackUrl: "/games" })} size="lg" variant="discord">
                            <BsDiscord className="me-2" /> Continue with Discord
                        </Button>
                    </div>
                </div>
                <p className="text-zinc-400 font-medium text-center">We use <Link className="text-zinc-300 underline hover:text-blue-500" href="https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps">Github</Link> & <Link className="text-zinc-300 underline hover:text-blue-500" href="https://discord.com/developers/docs/topics/oauth2">Discord</Link> OAuth2 integrations to handle authetication on our site.</p>
            </section>
            <div className="bg-glow" />
        </main>
    )
};