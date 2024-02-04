"use client";

import { SOCIALS } from "@/common/constants";
import Link from "next/link";
import { AboutMeItem } from "@/components/about-me/ui";

export default function Socials() {
  return (
    <div className="col-span-1 rounded-xl grid grid-cols-1 gap-6 sm:grid-cols-2">
      {SOCIALS.map((item) => (
        <AboutMeItem key={item.name} asChild className="py-8 hover:bg-zinc-700 transition-colors duration-300 ease-in-out">
          <Link rel="noreferrer" href={item.link} target="_blank">
            <span className="sr-only">Follow me on {item.name}</span>
            <item.icon className="text-zinc-50 w-14 h-14" />
            <h1 className="text-gray-200 font-thin pt-8">{item.name}</h1>
          </Link>
        </AboutMeItem>
      ))}
    </div>
  );
}
