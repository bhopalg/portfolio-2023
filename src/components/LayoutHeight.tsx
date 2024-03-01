"use client";

import { PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";
import { usePathname } from "next/navigation";

export default function LayoutHeight({ className, children }: PropsWithChildren<{ className?: string }>) {
  const pathname = usePathname();
  return <Slot className={cn(pathname !== "/" && "pt-0", className)}>{children}</Slot>;
}
