"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface isAuthenticated {
  isAuthenticated: boolean;
}

export const HomePage = ({ isAuthenticated }: isAuthenticated) => {
  const router = useRouter();
  return (
    <>
      <main className="container flex-grow flex items-center justify-center  bg-white dark:bg-black flex-col gap-4 lg:flex-row">
        <section className="flex item-center justify-center flex-grow">
          <Image
            src="/images/plant.png"
            width={400}
            height={400}
            alt="plant"
            className="object-contain"
          />
        </section>
        <section className="flex flex-col items-start justify-center flex-shrink m-2">
          <h1 className="text-2xl  lg:text-4xl font-semibold dark:text-white">
            Discover Every Plant Around You
          </h1>
          <p className=" md:mt-4 text-gray text-base text-wrap sm:text-xs">
            Discover the world of plants around you with just a snap. Log in to
            explore and save plants, access personalized care tips, and build
            your plant collection.
          </p>
          {isAuthenticated ? (
            <Button
              className="mt-8 bg-green text-white hover:bg-lightGreen"
              onClick={() => router.push("/dashboard")}
            >
              Go to My dashboard
            </Button>
          ) : (
            <Button
              className="mt-8 bg-green text-white hover:bg-lightGreen"
              onClick={() => router.push("/sign-in")}
            >
              Get Started - It&apos;s Free!
            </Button>
          )}
        </section>
      </main>
    </>
  );
};
