import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Link
        className="absolute bottom-6 left-0 right-0 mx-auto w-fit rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 opacity-75 transition hover:opacity-100"
        href={"https://widgetbot.io/"}
        target="_blank"
      >
        <div className="flex items-center gap-2">
          <h1 className="text-md text-center">Powered by</h1>
          <div className="flex items-center justify-center gap-x-2">
            <Image src="img/widgetbot.svg" alt="WidgetBot Logo" width={16} height={16} />
            <h2 className="text-lg underline">WidgetBot</h2>
          </div>
        </div>
      </Link>

      <Head>
        <title>WidgetBot Event Demo</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
