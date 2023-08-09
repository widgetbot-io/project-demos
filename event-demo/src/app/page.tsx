"use client";

import Link from "next/link";
import WidgetBot from "@widgetbot/react-embed";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Video, Chat, Stream } from "@/components/Stream";
import { Controls } from "@/components/Controls";

export default function Home() {
  return (
    <Container color="primary">
      <Header />
      <Stream>
        <Video>
          <iframe
            width="100%"
            height="100%"
            src="https://youtube.com/embed/jfKfPfyJRdk"
            title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder={0}
          />
        </Video>
        <Chat>
          <WidgetBot
            width="100%"
            height="100%"
            server="299881420891881473"
            channel="355719584830980096"
          />
        </Chat>
      </Stream>
      <Controls />
    </Container>
  );
}
