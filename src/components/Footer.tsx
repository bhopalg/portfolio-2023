"use client";

import { NAVIGATION, SOCIALS } from "@/common/constants";
import { InnerContainer, OuterContainer } from "@/components/Container";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { cn } from "@/lib";

function NavLink({ href, children, target }: { href: string; children: ReactNode; target?: string }) {
  return (
    <Link href={href} target={target} className="transition hover:text-light-blue-300">
      {children}
    </Link>
  );
}

function CopyrightText() {
  return <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Gurps. All rights reserved.</p>;
}

function Navigation() {
  return (
    <div className="flex gap-6 text-sm font-medium text-zinc-200">
      {NAVIGATION.map(({ name, href }) => (
        <NavLink key={name} href={href}>
          {name}
        </NavLink>
      ))}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className={"grid grid-cols-4 gap-5"}>
      {SOCIALS.map((item) => (
        <TooltipProvider key={item.name}>
          <Tooltip>
            <TooltipTrigger className="col-span-1" aria-label={`Tooltip trigger for ${item.name}`}>
              <Link href={item.link} target={"_blank"} rel={"noreferrer"} aria-label={`Link to ${item.name}`}>
                <item.icon className="text-zinc-50 w-5 h-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`Follow me on ${item.name}`}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={cn(
        "bg-zinc-900 ring-1 ring-zinc-300/20",
        pathname === "/uses" && "mt-10",
        pathname.includes("/my-docs") && "lg:pl-72",
      )}
    >
      <OuterContainer>
        <div className="border-t py-8 border-zinc-700/40">
          <InnerContainer>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <Navigation />
              <SocialIcons />
              <CopyrightText />
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  );
}
