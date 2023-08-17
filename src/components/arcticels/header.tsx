"use client";

import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
  return <h1 className={"text-2xl font-bold font-spaceMono"}>{children}</h1>;
}
