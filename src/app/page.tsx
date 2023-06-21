"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// Components
import Navbar from "@/components/Navbar";
import { Button } from "@/components/common/Button";
// Icons
import { BsDiscord } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";

interface Game {
    background_image: string;
};

export default function Home () {
    // const [game, setGame] = useState<Game | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [fetchFailed, setFetchFailed] = useState<boolean>(false);

    // async function getGamesForSlide () {
    //     if (!process.env.NEXT_PUBLIC_GAMES_API) {
    //         setLoading(false);
    //         setFetchFailed(true);
    //         throw new Error("No games API URL provided");
    //     };

    //     try {
    //         await axios.get(`${process.env.NEXT_PUBLIC_GAMES_API}/games`, {
    //             params: {
    //                 key: "da8cc831af38476487f2483433bc183b",
    //                 ordering: '-metacritic',
    //                 platforms: '4',
    //                 page_size: 10,
    //             },
    //         })
    //         .then(res => {
    //             setGame(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             setLoading(false);
    //             setFetchFailed(true);
    //         });
    //     } catch(err) {
    //         setLoading(false);
    //         setFetchFailed(true);
    //     };
    // };

    // useEffect(() => {
    //     getGamesForSlide();
    // }, [])

    return (
        <main>
            <Navbar />
            <section className="px-5 py-32">
                {/* <div className="max-w-2xl mx-auto mb-28">
                    <div className="bg-zinc-800 text-sm text-zinc-100 font-medium py-4 px-5 rounded border border-zinc-600 shadow-destructive/25 shadow-lg">
                        <span className="flex items-center">
                            <HiBellAlert className="text-xl me-2.5" /> We just released our new game favoriting system!
                            <span className="ms-auto">
                                <Link className="text-destructive flex items-center underline" href='/profile'>Check it out <BsArrowRightShort className="text-lg ms-1" /></Link>
                            </span>
                        </span>
                    </div>
                </div> */}
                <Image 
                    src="https://pbs.twimg.com/profile_images/1240860415271161856/sZWDgYZz_400x400.jpg"
                    //src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/271593824_101060199141396_680848477478789790_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8hMCKyBeVxYAX-EWzeo&_nc_ht=scontent-iad3-2.xx&oh=00_AfC2ZZnYl9Diadbn7vBWdyy5AbncIFGGYlzggK_zbzrpXg&oe=6497019B"
                    alt="Game"
                    width={125}
                    height={125}
                    className="mx-auto rounded-full mb-20"
                />
                <h1 className="text-zinc-100 text-5xl text-center font-bold mb-12">The #1 platform for browsing games</h1>
                <p className="text-zinc-300 text-xl text-center leading-relaxed mb-12">For over 2 years we have been providing the gaming community with the best browsing<br className="hidden lg:block" /> experience. Find new games to play with friends or just hangout and have fun, the choice is yours!</p>
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
        </main>
    );
};