"use client";

import Image from "next/image";
// Components
import Navbar from "@/components/Navbar";
import TabsCard from "@/components/core/TabsCard";
import Container from "@/components/Container";
import { Button } from "@/components/common/Button";
// Icons
import { BsDiscord } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { IoGameController } from "react-icons/io5";

export default function Home () {
    return (
        <main>
            <Navbar />
            <section className="px-5 py-44">
                {/* <Image 
                    src="https://pbs.twimg.com/profile_images/1240860415271161856/sZWDgYZz_400x400.jpg"
                    alt="Game"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full mb-20"
                /> */}
                <h1 className="text-zinc-100 text-6xl text-center font-bold mb-12 tracking-tighter">The #1 platform for browsing games</h1>
                <p className="text-zinc-300 text-xl text-center leading-relaxed mb-12 tracking-wide">For over 2 years we have been providing the gaming community with the best browsing<br className="hidden lg:block" /> experience. Find new games to play with friends or just hangout and have fun, the choice is yours!</p>
                <div className="flex items-center justify-center space-x-4">
                    <Button size="lg" variant="discord">
                        <BsDiscord className="me-2" /> Get started
                    </Button>
                    <Button size="lg" variant="secondary">
                        Browse games
                    </Button>  
                </div>
                <div className="bg-glow" />
            </section>
            <section className="pt-10 pb-24">
                <Container>
                    <h6 className="text-zinc-300 text-center uppercase font-bold tracking-widest mb-10">Trusted by so many of your favorite companies</h6>
                    <ul className="flex items-center justify-center space-x-12">
                        <li>
                            <Image 
                                src="/brands/nextjs.png"
                                width={136}
                                height={48}
                                alt="Next.JS"
                                className="brightness-0 invert"
                            />
                        </li>
                        <li>
                            <Image 
                                src="/brands/docker.png"
                                width={136}
                                height={48}
                                alt="Next.JS"
                                className="brightness-0 invert"
                            />
                        </li>
                        <li>
                            <Image 
                                src="/brands/tailwindcss.png"
                                width={136}
                                height={48}
                                alt="Next.JS"
                                className="brightness-0 invert"
                            />
                        </li>
                        <li>
                            <Image 
                                src="/brands/google.png"
                                width={136}
                                height={48}
                                alt="Next.JS"
                                className="brightness-0 invert"
                            />
                        </li>
                        <li>
                            <Image 
                                src="/brands/discord.png"
                                width={136}
                                height={48}
                                alt="Next.JS"
                                className="brightness-0 invert"
                            />
                        </li>
                    </ul>
                </Container>
            </section>
            <section className="py-24">
                <Container>
                    <h6 className="text-zinc-200 text-2xl font-medium mb-4">Powered by the worlds leading technologies</h6>
                    <p className="text-zinc-400 text-lg mb-16">We enhance your experience as a user by using leading technologies to deliver a simple to use and modern website</p>
                    <div className="grid grid-cols-3 gap-x-8">
                        <div className="bg-zinc-800 rounded-md p-6">
                            <SiNextdotjs className="text-white text-3xl mb-6" />
                            <h6 className="text-zinc-100 text-xl font-medium mb-2">NextJS 13</h6>
                            <p className="text-zinc-400">Our website is being powered by NextJS 13, improving speed and overall performane for our users.</p>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-6">
                            <IoGameController className="text-white text-3xl mb-6" />
                            <h6 className="text-zinc-100 text-xl font-medium mb-2">Rawg API</h6>
                            <p className="text-zinc-400">We utilize the Rawg API to ensure seamless integration and display of comprehensive game-related data.</p>
                        </div>
                        <div className="bg-zinc-800 rounded-md p-6">
                            <BsDiscord className="text-white text-3xl mb-6" />
                            <h6 className="text-zinc-100 text-xl font-medium mb-2">Discord OAuth2</h6>
                            <p className="text-zinc-400">Eliminates the need for creating separate accounts, making it quicker and easier for users to access our platform.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
};