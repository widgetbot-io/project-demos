import { Mic, Video, MessageCircleDashed, Phone } from "lucide-react";
import { create } from "zustand";

const useActionsStore = create((set) => ({
  enableMic: false,
  enableVideo: false,
  enableChat: false,
  toggleState: () => set((state) => ({ enableMic: !state.enableMic })),
}));

const ActionBar = () => {
  return (
    <>
      <div className="absolute bottom-4 left-0 right-0 mx-auto w-fit gap-4 rounded bg-neutral-800 p-1">
        <div className="flex gap-2">
          <div className="rounded bg-indigo-600 p-3">
            <Mic />
          </div>
          <div className="rounded bg-neutral-700 p-3">
            <Video />
          </div>
          <div className="rounded bg-neutral-700 p-3">
            <MessageCircleDashed />
          </div>
          <div className="rounded bg-red-600 p-3">
            <Phone />
          </div>
        </div>
      </div>
    </>
  );
};
export default ActionBar;
