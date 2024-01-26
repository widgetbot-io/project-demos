import { useEffect, useState } from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import WidgetBot from "@widgetbot/react-embed";
import { useStoreState } from "@/store/hooks";

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  const token = useStoreState(state => state.auth.token);


  return (
    <BaseLayout>
      <div className="flex gap-x-4 min-h-[93vh] mx-4">
        <div className="w-3/4">
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
        </div>

        <div className="w-1/4 rounded-lg ">
          {isClient && <WidgetBot
              width="100%"
              height="100%"
              server="299881420891881473"
              channel="355719584830980096"
              shard="https://emerald.widgetbot.io"
              token={token}
          />
          }
        </div>
      </div>
    </BaseLayout>
  );
}
