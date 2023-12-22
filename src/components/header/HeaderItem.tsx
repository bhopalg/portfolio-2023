"use client";

import { DropdownMenuItem } from "@/components/ui/DropdownMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib";

interface HomeItemProps {
  name: string;
  href: string;
}

export default function HeaderItem({ name, href }: HomeItemProps) {
  const pathname = usePathname();

  return (
    <DropdownMenuItem asChild className={cn(pathname === href && "bg-zinc-800")}>
      <Link href={href}>{name}</Link>
    </DropdownMenuItem>
  );
}
