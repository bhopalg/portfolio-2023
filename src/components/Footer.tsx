"use client";

import { NAVIGATION, SOCIALS } from "@/common/constants";
import { InnerContainer, OuterContainer } from "@/components/Container";
import { Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
        <NavLink key={name} href={href} target={""}>
          {name}
        </NavLink>
      ))}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className={"grid grid-cols-4 gap-5"}>
      {SOCIALS.map(({ name, link, image }) => (
        <Tooltip key={name} content={`Follow me on ${name}`}>
          <a href={link} target={"_blank"} rel={"noreferrer"} className={"col-span-1"}>
            <Image src={image} className={"filter-white"} alt={name} width={20} height={20} />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className={clsx("bg-zinc-900 ring-1 ring-zinc-300/20", pathname === "/uses" && "mt-10")}>
      <OuterContainer>
        <div className="border-t pt-10 pb-16 border-zinc-700/40">
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
