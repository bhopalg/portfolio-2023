"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";

export function MobileNavItem({ href, children, target }: { href: string; children: ReactNode; target?: string }) {
  return (
    <li>
      <Popover.Button target={target} as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}
