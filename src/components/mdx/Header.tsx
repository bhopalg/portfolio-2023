"use client";

import { ReactNode } from "react";

function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">{children}</h1>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">{children}</h3>;
}

function H4({ children }: { children: ReactNode }) {
  return <h4 className="text-lg font-bold tracking-tight text-zinc-50 sm:text-xl">{children}</h4>;
}

export const Heading = {
  H1: H1,
  H2: H2,
  H3: H3,
  H4: H4,
};
