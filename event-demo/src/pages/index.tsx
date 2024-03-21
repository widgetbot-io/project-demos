import { useEffect, useState } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import WidgetBot from "@widgetbot/react-embed";
import { useStoreState } from "@/store/hooks";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  const user = useStoreState(state => state.auth.user);

  const token = useStoreState(state => state.auth.token);

  return (
    <BaseLayout>
      <PanelGroup className="min-h-screen gap-x-4 p-4 transition-all" direction="horizontal">
        <Panel defaultSize={60} minSize={60}>
          <iframe
            className="rounded-lg"
            width="100%"
            height="100%"
            src="https://youtube.com/embed/V7KaghTZHgk?autoplay=1&mute=1"
            title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Panel>
        <PanelResizeHandle className="w-[5px] rounded bg-neutral-700 transition-all hover:bg-neutral-500" />
        <Panel collapsible minSize={25}>
          {isClient && token ? (
            <div className="h-full w-full rounded-lg">
              <WidgetBot
                width="100%"
                height="100%"
                server="299881420891881473"
                channel="355719584830980096"
                shard="https://emerald.widgetbot.io"
                token={token}
              />
            </div>
          ) : (
            <div className="h-full w-full rounded-lg bg-neutral-800">
              {!user && (
                <div className="grid h-full w-full items-center justify-center text-center">
                  <div className="flex flex-col gap-y-8">
                    <h2 className="text-2xl">Log in to chat</h2>
                    <AuthModal />
                  </div>
                </div>
              )}
            </div>
          )}
        </Panel>
      </PanelGroup>
    </BaseLayout>
  );
}
