"use client";

import Typescript from "@/components/icons/Typescript";
import Link from "next/link";
import Python from "@/components/icons/Python";
import Devops from "@/components/icons/Devops";
import SwiftUI from "@/components/icons/SwiftUI";
import { AboutMeItem } from "@/components/about-me/ui";
import { cn } from "@/lib";
import { HOVER_EFFECTS_CLASSNAMES } from "@/common/constants";

const frameworks = [
  {
    icon: Typescript,
    alt: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: Python,
    alt: "Python",
    href: "https://www.python.org/",
  },
  {
    icon: SwiftUI,
    alt: "MongoDB",
    href: "https://developer.apple.com/xcode/swiftui/",
  },
  {
    icon: Devops,
    alt: "Devops",
    href: "https://www.atlassian.com/devops/",
  },
];

export default function Frameworks() {
  return (
    <div className="row-span-1 grid gap-6 grid-cols-2">
      {frameworks.map((item) => (
        <AboutMeItem asChild key={item.alt} className={cn("hover:bg-transparent", HOVER_EFFECTS_CLASSNAMES)}>
          <Link target="_blank" rel="noreferrer" href={item.href}>
            <span className="sr-only">{item.alt} Image</span>
            <item.icon className="text-zinc-50 w-16 h-16" />
          </Link>
        </AboutMeItem>
      ))}
    </div>
  );
}
