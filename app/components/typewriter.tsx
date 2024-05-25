"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "and",
        className: "text-white",
    },
    {
      text: "Biology",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-400 dark:text-neutral-200 text-xl mb-6">
        Hey, I'm Ryan D'Onofrio. I'm a Software Engineer
      </p>
      <div className="text-white flex items-center text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">
        <span className="dark:text-white text-white">Building at the intersection of&nbsp;</span>
        <TypewriterEffect words={words} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 z-20">
        <Button asChild className="w-40 h-10 rounded-xl bg-black border border-white outline-2 dark:border-white text-white text-sm">
            <Link  href="mailto:ryandonofrio@gmail.com"> Contact Me </Link>

        </Button>   

        <Button className="w-40 h-10 rounded-xl bg-white border border-black outline-2 dark:border-black text-black text-sm hover:bg-gray-100"
        asChild>
          <Link href="/blog" target="_blank" > Blog </Link>
        </Button>
      </div>
    </div>
  );
}