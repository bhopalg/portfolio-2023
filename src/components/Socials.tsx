"use client";

import { SOCIALS } from "@/common/constants";
import { cn } from "@/lib";
import Link from "next/link";

export function Socials({ isInView }: { isInView: boolean }) {
  return (
    <div className={"col-span-1 rounded-xl grid grid-cols-1 gap-6 sm:grid-cols-2"}>
      {SOCIALS.map((item) => (
        <Link
          rel={"noreferrer"}
          href={item.link}
          target={"_blank"}
          key={item.name}
          className={cn(
            !isInView && "translate-x-40 opacity-0 blur-lg",
            isInView && "translate-x-0 opacity-100 blur-none",
            "col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 transition-all ease-in-out duration-300 rounded-xl justify-center items-center py-8 flex flex-col",
          )}
        >
          <span className={"sr-only"}>Follow me on {item.name}</span>
          <item.icon className="text-zinc-50 w-14 h-14" />
          <h1 className={"font-roboto text-gray-200 font-thin pt-8"}>{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}
