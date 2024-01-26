"use client";

import Link from "next/link";
import WidgetBot from "@widgetbot/react-embed";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Video, Chat, Stream } from "@/components/Stream";
import { Controls } from "@/components/Controls";
import { useEffect, useState } from "react";
import { Login, LoginTitle } from "@/components/Login";
import { AuthModal } from "@/components/AuthModal";
import * as jwt from "jsonwebtoken";

export default function Home() {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [client, setClient] = useState(false)

  useEffect(() => setClient(true), [])

  const auth = (username: string) => {
    if (username == null) return;
    // DO authentication stuff here and return JWT from platform, then:
    var token = jwt.sign({data: username}, "superSecretKey");
    setUsername(username);
    setToken(token)
  }

  return (
    <Container color="primary">
      <Header />
      <Stream>
        <AuthModal
          token={token}
          auth={auth}
        ></AuthModal>
        <Video>
          {!username ?
            <Login>
              <LoginTitle>Log in to access the stream!</LoginTitle>
            </Login>
          : <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
              title="YouTube video player"
              allow="autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder={0}
            />}
        </Video>
        <Chat>
          {client && <WidgetBot
            width="100%"
            height="100%"
            server="299881420891881473"
            channel="355719584830980096"
            shard="https://emerald.widgetbot.io"
            token={token}
          />
          }
        </Chat>
      </Stream>
      {username && <Controls username={username} />}
    </Container>
  );
}
