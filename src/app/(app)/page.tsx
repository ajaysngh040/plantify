import React from "react";

import { HomePage } from "./homePage";

const Home = async () => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 dark:bg-black">
      <HomePage />
    </div>
  );
};

export default Home;
