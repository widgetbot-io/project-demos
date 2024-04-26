import { getAuth } from "@/app/lib/auth/actions";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import DashboardContainer from "./container";
import LogOutButton from "../logout-btn";

import { type User } from "lucia";
import { Button } from "./button";
import Link from "next/link";

const DashboardSideBarHeader = ({ user }: { user: User }) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-xl bg-indigo-950 p-4">
      <Avatar className="ring-2 ring-indigo-400">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.username[0]?.toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center -space-y-1">
        <p className="text-sm font-bold">{user.username}</p>
        <span className="text-xs text-zinc-400">
          currently in{" "}
          <span className="text-zinc-300">{user.guilds.length} guilds</span>
        </span>
      </div>
      <LogOutButton />
    </div>
  );
};

const DashboardSideBar = async () => {
  const { user } = await getAuth();
  return (
    <div>
      <DashboardSideBarHeader user={user} />
      <DashboardContainer className="min-w-full items-center gap-2 sm:min-w-[320px] lg:min-w-[350px] 2xl:min-w-[400px]">
        <div className="mt-4 flex flex-col items-center justify-center">
          <Link
            href={"/dashboard"}
            className="w-full rounded-t-xl bg-red-500 p-4 text-left"
          >
            Home
          </Link>
        </div>
      </DashboardContainer>
    </div>
  );
};
export default DashboardSideBar;
