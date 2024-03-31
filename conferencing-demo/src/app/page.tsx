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
    <main className="grid h-screen grid-cols-1 items-center justify-center gap-12 p-12 md:grid-cols-2">
      {members.map((member, i) => (
        <div
          className={tw(
            "flex h-full w-full items-center justify-center rounded bg-neutral-800 transition",
          )}
          key={i}
        >
          {member}
        </div>
      ))}
      <div
        className={tw(
          "absolute right-0 top-0 h-screen w-full bg-neutral-950 transition duration-300 lg:w-[600px]",
          !enabled ? "translate-x-[600px]" : "",
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
