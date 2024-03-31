"use client";

import { create } from "zustand";
import { twMerge as tw } from "tailwind-merge";
import { MessageCircleDashed } from "lucide-react";

type ChatState = {
  enabled: boolean;
  toggle: () => void;
};

export const useChatStore = create<ChatState>()((set) => ({
  enabled: false,
  toggle: () => set((state) => ({ enabled: !state.enabled })),
}));

type ActionType = {
  className?: string;
};

const ToggleChat = ({ className }: ActionType) => {
  const { enabled, toggle } = useChatStore();
  return (
    <div
      onClick={() => toggle()}
      className={tw(
        enabled ? "bg-indigo-800" : "bg-stone-800",
        "cursor-pointer rounded p-3 transition",
        className,
      )}
    >
      <MessageCircleDashed />
    </div>
  );
};

export default ToggleChat;
