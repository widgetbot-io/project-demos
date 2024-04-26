"use client";

import { LogOut } from "lucide-react";
import { logout } from "../lib/auth/actions";

function LogOutButton() {
  return (
    <LogOut
      className="ml-auto h-5 w-5 hover:cursor-pointer"
      onClick={() => logout()}
    />
  );
}
export default LogOutButton;
