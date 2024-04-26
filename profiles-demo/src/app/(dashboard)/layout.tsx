import { type PropsWithChildren } from "react";
import { getAuth } from "../lib/auth/actions";
import { redirect } from "next/navigation";

import DashboardSideBar from "../components/dashboard/side-bar";

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const { user } = await getAuth();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex h-screen flex-col p-4">
      <div className="flex h-full flex-col gap-4 md:flex-row">
        <DashboardSideBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
