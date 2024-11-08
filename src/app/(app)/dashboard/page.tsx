import React from "react";

import { redirect } from "next/navigation";
import Dashboard from "./dashboard";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

const dashboard = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  // const isAuthenticated = false;
  if (!isAuthenticated) {
    redirect("/sign-in");
  } else {
    return (
      <div className="flex h-screen w-full items-center justify-center px-4 dark:bg-black">
        <Dashboard />
      </div>
    );
  }
};

export default dashboard;
