"use client";

import { NAVIGATION } from "@/common/constants";
import { NavItem } from "@/components/header/NavItem";

export function DesktopNavigation({ className, target }: { className?: string; target?: string }) {
  return (
    <nav className={className}>
      <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
        {NAVIGATION.map(({ href, name }) => (
          <NavItem key={name} href={href} target={target}>
            {name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
