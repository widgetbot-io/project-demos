"use client";

import dynamic from "next/dynamic";

import ActionBar from "@/_components/ActionBar";
import { twMerge as tw } from "tailwind-merge";

import { useChatStore } from "@/_components/ToggleChat";

const members = [
  "You",
  "WidgetBot Developer",
  "WidgetBot Emerald",
  "+ 3 others",
];

const WidgetBot = dynamic(
  () => {
    return import("@widgetbot/react-embed");
  },
  { ssr: false },
);

export default function HomePage() {
  const { enabled } = useChatStore();
  return (
    <main className="flex h-screen transition">
      <div className="grid w-full grid-cols-1 gap-4 p-4 lg:grid-cols-2">
        {members.map((member, i) => (
          <div
            className={tw(
              "flex h-full w-full items-center justify-center rounded bg-neutral-800 transition",
            )}
            key={i}
          >
            {member}
            <iframe
              width={"100%"}
              height="100%"
              src="https://www.youtube.com/embed/6avJHaC3C2U?si=o_Rn3C4dOhUZHiXS&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        ))}
      </div>
      <div
        className={tw(
          "absolute right-0 top-0 h-screen w-full bg-neutral-950 transition duration-300 md:static md:w-[600px]",
          !enabled ? "translate-x-[600px] md:w-0 lg:duration-75" : "ml-2",
        )}
      >
        <WidgetBot
          width="100%"
          height="100%"
          server="299881420891881473"
          channel="355719584830980096"
          shard="https://emerald.widgetbot.io"
        />
      </div>

      <ActionBar />
    </main>
  );
}
