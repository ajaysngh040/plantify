"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  // const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const changeNavButton = () => {
  //     if (window.scrollY >= 400 && window.innerWidth < 768) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeNavButton);
  // }, []);

  return (
    <>
      <Link
        href="/"
        // style={{ display: showButton ? "none" : "block" }}
        className="h-8 w-8"
      >
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/images/leaf.png"
            alt="Logo"
            width={width < 1024 ? "150" : "250"}
            height={width < 1024 ? "45" : "74"}
            className="relative"
          />
          <h2 className="hover:text-lightGreen dark:text-white dark:hover:text-lightGreen">
            Plantify
          </h2>
        </div>
      </Link>
    </>
  );
};

export default Logo;
