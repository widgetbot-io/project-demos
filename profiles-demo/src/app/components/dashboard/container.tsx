import { cn } from "@/app/lib/utils";
import React, { type ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const DashboardContainer = ({ className, children }: Props) => {
  return (
    <div className={cn(className, "h-full rounded-xl bg-zinc-900")}>
      {children}
    </div>
  );
};

export default DashboardContainer;
