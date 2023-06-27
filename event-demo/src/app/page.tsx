"use client";

import Link from "next/link";
import * as Common from "@/components/common";
import * as Styles from "./styles";
import WidgetBot from "@widgetbot/react-embed";

export default function Home() {
  return (
    <Common.Container color="primary">
      <Common.Header />
      <Common.Stream>
        <Common.Video>
          <iframe
            width="100%"
            height="100%"
            src="https://youtube.com/embed/jfKfPfyJRdk"
            title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder={0}
          />
        </Common.Video>
        <Common.Chat>
          <WidgetBot
            width="100%"
            height="100%"
            server="299881420891881473"
            channel="355719584830980096"
          />
        </Common.Chat>
      </Common.Stream>
    </Common.Container>
  );
}
