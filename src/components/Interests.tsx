"use client";

import UFC from "@/components/icons/UFC";
import F1 from "@/components/icons/F1";
import Khanda from "@/components/icons/Khanda";
import Link from "next/link";
import { cn } from "@/lib";

const interests = [
  {
    icon: UFC,
    alt: "URC",
    href: "https://www.ufc.com/",
    position: "top",
  },
  {
    icon: F1,
    alt: "F1",
    href: "https://www.formula1.com/",
    position: "top",
  },
  {
    icon: Khanda,
    alt: "Sikh Khanda",
    href: "https://en.wikipedia.org/wiki/Sikhs",
    position: "bottom",
  },
];

export default function Interests({ isInView }: { isInView: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {interests
          .filter((i) => i.position === "top")
          .map((item) => (
            <Link
              target={"_blank"}
              rel={"noreferrer"}
              href={item.href}
              className={cn(
                !isInView && "translate-y-40 opacity-0 blur-lg",
                isInView && "translate-y-0 opacity-100 blur-none",
                "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 rounded-xl flex justify-center items-center py-8",
              )}
              key={item.alt}
            >
              <span className={"sr-only"}>{item.alt} Image</span>
              <item.icon className="text-zinc-50 h-16 w-16" />
            </Link>
          ))}
      </div>
      <div className="grid grid-cols-1">
        {interests
          .filter((i) => i.position === "bottom")
          .map((item) => (
            <Link
              target={"_blank"}
              rel={"noreferrer"}
              href={item.href}
              className={cn(
                !isInView && "translate-y-40 opacity-0 blur-lg",
                isInView && "translate-y-0 opacity-100 blur-none",
                "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 rounded-xl flex justify-center items-center py-8",
              )}
              key={item.alt}
            >
              <span className={"sr-only"}>{item.alt} Image</span>
              <item.icon className="text-zinc-50 h-16 w-16" />
            </Link>
          ))}
      </div>
    </div>
  );
}
