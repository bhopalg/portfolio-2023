"use client";

import { HackerText } from "@/components/HackerText";
import Logo from "@/components/Logo";

export function Hero() {
  return (
    <div className="min-h-[calc(100vh_-_190px)] flex justify-center items-center mx-auto md:max-w-7xl w-full hero-text-typer flex-col gap-5">
      <Logo className="h-20 w-20" />
      <HackerText />
    </div>
  );
}
