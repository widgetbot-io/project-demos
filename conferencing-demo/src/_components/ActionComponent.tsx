"use client";

import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";

type ActionType = {
  icon: React.ReactNode;
  className?: string;
};

const ActionComponent = ({ icon, className }: ActionType) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={tw(
        toggle ? "bg-indigo-800" : "bg-stone-800",
        "cursor-pointer rounded p-3 transition",
        className,
      )}
    >
      {icon}
    </div>
  );
};

export default ActionComponent;
