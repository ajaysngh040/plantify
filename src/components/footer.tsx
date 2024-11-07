"use client";

import Link from "next/link";
import Logo from "./ui/logo";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-12 fixed bottom-0 bg-white dark:bg-black ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full pl-8">
            <Logo />

            {/* <ul className="hidden md:flex gap-x-6 text-sm text-black dark:text-white">
              <li className="hover:text-lightGreen">
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li className="hover:text-lightGreen">
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li className="hover:text-lightGreen">
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul> */}
            <div className="flex items-center justify-center">
              <ul className="flex gap-x-2">
                <li className="text-green hover:text-lightGreen">
                  <Link href="#">
                    <Facebook />
                  </Link>
                </li>
                <li className="text-green hover:text-lightGreen">
                  <Link href="#">
                    <Instagram />
                  </Link>
                </li>
                <li className="text-green hover:text-lightGreen">
                  <Link href="#">
                    <Twitter />
                  </Link>
                </li>
                <li className="text-green hover:text-lightGreen">
                  <Link href="#">
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
