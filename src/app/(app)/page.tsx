import React from "react";

import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import { HomePage } from "./homePage";

const Home = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 dark:bg-black">
      <HomePage isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default Home;
