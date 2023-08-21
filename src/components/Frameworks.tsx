"use client";

import clsx from "clsx";
import Typescript from "@/components/icons/Typescript";
import Link from "next/link";
import Python from "@/components/icons/Python";
import Devops from "@/components/icons/Devops";
import SwiftUI from "@/components/icons/SwiftUI";

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

export function Frameworks({ isInView }: { isInView: boolean }) {
  return (
    <div className="row-span-1 grid grid-cols-1 gap-6 md:grid-cols-2">
      {frameworks.map((item) => (
        <Link
          target={"_blank"}
          rel={"noreferrer"}
          href={item.href}
          key={item.alt}
          className={clsx(
            !isInView && "-translate-y-40 opacity-0 blur-lg",
            isInView && "translate-y-0 opacity-100 blur-none",
            "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 rounded-xl flex justify-center items-center py-8",
          )}
        >
          <span className="sr-only">{item.alt} Image</span>
          <item.icon className="text-zinc-50 w-16 h-16" />
        </Link>
      ))}
    </div>
  );
}
