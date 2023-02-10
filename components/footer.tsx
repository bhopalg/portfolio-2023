import { NAVIGATION } from "@/common/constants";
import { Container, InnerContainer, OuterContainer } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="transition hover:text-light-blue-300">
      {children}
    </Link>
  );
}

function CopyrightText() {
  return (
    <p className="text-sm text-zinc-400 dark:text-zinc-500">&copy; {new Date().getFullYear()} Gurps. All rights reserved.</p>
  );
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
    <div className={"grid grid-cols-2 sm:grid-cols-4"}>
      <div className={"col-span-1"}>
        <Image src={"/github-icon.svg"} className={"filter-white"} alt={"GitHub"} width={24} height={24} />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 bg-zinc-900 ring-1 ring-zinc-300/20">
      <OuterContainer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
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
