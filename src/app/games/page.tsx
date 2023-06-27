"use client";

import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
// Components
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/common/Card";

export default function Games () {
    const [games, setGames] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);

    async function fetchGames () {
        if (!process.env.NEXT_PUBLIC_GAMES_API) throw new Error("Must provide a key for the API.");

        const games = await axios.get(`https://api.rawg.io/api/games`, {
            params: {
                key: "da8cc831af38476487f2483433bc183b",
                ordering: "-metacritic",
                page: page,
                page_size: 40
            }
        });

        setGames((prev) => [...prev, ...games.data.results]);
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    console.log(games);

    return (
        <main>
            <Head>
                <title>All Games | GameIO</title>
            </Head>
            <Navbar />
            <section className="py-28">
                <InfiniteScroll
                    dataLength={games.length}
                    next={fetchGames}
                    hasMore={true}
                    loader={<>Loading...</>}
                >
                    <div className="grid grid-cols-6 gap-8">
                        {games.map((game, index) => (
                            <Card key={index}>
                                <div className="relative w-100 h-96 rounded-xl">
                                    <Image 
                                        src={game.background_image || ""}
                                        alt="test"
                                        width={1000}
                                        height={2000}
                                        className="w-100 h-full object-cover rounded-xl"
                                    />
                                </div>
                            </Card>
                        ))}
                    </div>
                </InfiniteScroll>
            </section>
            <div className="bg-glow" />
        </main>
    );
};