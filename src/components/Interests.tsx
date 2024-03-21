"use client";

import UFC from "@/components/icons/UFC";
import F1 from "@/components/icons/F1";
import Khanda from "@/components/icons/Khanda";
import Link from "next/link";
import { cn } from "@/lib";
import AboutMeItem from "@/components/about-me/ui/AboutMeItem";
import { HOVER_EFFECTS_CLASSNAMES } from "@/common/constants";

const interests = [
  {
    icon: UFC,
    alt: "UFC",
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

export default function Interests() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="grid gap-6 grid-cols-2">
        {interests
          .filter((i) => i.position === "top")
          .map((item) => (
            <AboutMeItem key={item.alt} asChild>
              <Link
                target="_blank"
                rel="noreferrer"
                href={item.href}
                className={cn("hover:bg-zinc-700", HOVER_EFFECTS_CLASSNAMES)}
              >
                <span className={"sr-only"}>{item.alt} Image</span>
                <item.icon className="text-zinc-50 h-16 w-16" />
              </Link>
            </AboutMeItem>
          ))}
      </div>
      <div className="grid grid-cols-1">
        {interests
          .filter((i) => i.position === "bottom")
          .map((item) => (
            <AboutMeItem key={item.alt} asChild>
              <Link
                target="_blank"
                rel="noreferrer"
                href={item.href}
                className={cn("hover:bg-zinc-700", HOVER_EFFECTS_CLASSNAMES)}
              >
                <span className={"sr-only"}>{item.alt} Image</span>
                <item.icon className="text-zinc-50 h-16 w-16" />
              </Link>
            </AboutMeItem>
          ))}
      </div>
    </div>
  );
}
