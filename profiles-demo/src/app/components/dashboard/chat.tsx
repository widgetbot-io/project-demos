"use client";

import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-zinc-900" />,
});

const ChatWidget = () => {
  return (
    <>
      <WidgetBot
        height={"100%"}
        width={"100%"}
        server="299881420891881473"
        channel="355719584830980096"
      />
    </>
  );
};
export default ChatWidget;
