"use client";

import { HackerText } from "@/components/hacker-text";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Hero() {
  return (
    <div className={"relative w-full h-screen"}>
      <div className={"absolute w-full h-screen flex z-20 text-white items-center px-10 md:px-36"}>
        <div className={"md:max-w-7xl w-full hero-text-typer justify-center flex flex-col mx-auto"}>
          <HackerText />
          <Link
            href={"#about-me"}
            className={
              "w-12 h-12 mx-auto rounded-full bg-dark-blue-500 mt-6 animate-bounce border-2 border-white drop-shadow-2xl"
            }
          >
            <ArrowDownIcon className={"h-full w-6 mx-auto"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
