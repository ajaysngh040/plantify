"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  const user = useAppSelector((state) => state?.auth.user);
  return (
    <>
      <main className="container flex-grow flex items-top justify-center  bg-white dark:bg-black flex-col gap-4 lg:flex-row">
        <section className="flex flex-col items-start justify-center  m-2 pl-6">
          <h2 className="dark:text-white text-2xl mb-4">Hi {user?.name}!</h2>
          <h1 className="text-2xl md:text-5xl font-semibold dark:text-white">
            Welcome to Plantify
          </h1>
          <p className=" md:mt-4 text-gray text-base text-wrap sm:text-xs">
            Identify plants with a single snap! Whether you&apos;re a gardening
            enthusiast, a nature explorer, or simply curious, our app helps you
            recognize plants in seconds
          </p>
          <Button className="mt-8 bg-green text-white hover:bg-lightGreen">
            Upload Image
          </Button>
        </section>
        <section className="flex item-center justify-center flex-grow">
          <Image
            src="/images/plant.png"
            width={400}
            height={400}
            alt="plant"
            className="object-contain"
          />
        </section>
      </main>
    </>
  );
}
