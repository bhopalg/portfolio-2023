"use client";

import { PropsWithChildren, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";
import { usePathname } from "next/navigation";

export default function LayoutHeight({ className, children }: PropsWithChildren<{ className?: string }>) {
  const pathname = usePathname();

  const nonHomepageCss = "min-h-[calc(100dvh_-_80px_-_173px)] lg:min-h-[calc(100dvh_-_80px_-_85px)] mt-[80px]";
  const homepageCss = "min-h-dvh";

  useEffect(() => {
    const updateCursor = ({ x, y }: { x: number; y: number }) => {
      document.documentElement.style.setProperty("--x", String(x));
      document.documentElement.style.setProperty("--y", String(y));
    };

    document.body.addEventListener("pointermove", updateCursor);

    return () => {
      document.body.removeEventListener("pointermove", updateCursor);
    };
  }, []);

  return <Slot className={cn(pathname !== "/" ? nonHomepageCss : homepageCss, className)}>{children}</Slot>;
}
