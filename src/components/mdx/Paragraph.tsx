"use client";

import { ReactNode } from "react";

function P({ children }: { children: ReactNode }) {
  return <p className="text-base leading-7 text-zinc-50">{children}</p>;
}

export const Paragraph = {
  P: P,
};
