"use client";

import { ReactNode } from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
