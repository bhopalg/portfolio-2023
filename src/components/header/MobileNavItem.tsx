"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";

export function MobileNavItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}
