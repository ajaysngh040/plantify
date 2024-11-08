"use client";

import Logo from "./ui/logo";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/lib/themeToggle";
import { Moon, SunMoonIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { handleSignOut } from "@/lib/auth/handleSignOutServerAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearAuth } from "@/store/auth/authSlice";
import { persistor } from "@/lib/store";
// import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isDarkMode, toggleTheme } = useDarkMode();
  const isAuthenticated = useAppSelector(
    (state) => state?.auth.isAuthenticated
  );

  const handleLogOut = async () => {
    await handleSignOut();
    dispatch(clearAuth());
    persistor.purge();
  };

  return (
    <div className="w-full h-20 bg-white dark:bg-black sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full pl-8">
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

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="bg-white text-black hover:bg-white hover:text-lightGreen  dark:bg-black dark:text-white dark:hover:text-black"
              >
                {isDarkMode ? (
                  <Moon size={24} fill="white" />
                ) : (
                  <SunMoonIcon size={24} />
                )}
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center md:hidden hover:text-lightGreen dark:text-white dark:hover:text-lightGreen"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <div className="hidden md:block">
              {isAuthenticated ? (
                <Button
                  className=" bg-green text-white hover:bg-lightGreen"
                  onClick={handleLogOut}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  className=" bg-green text-white hover:bg-lightGreen"
                  onClick={() => router.push("/sign-in")}
                >
                  Sign in
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
