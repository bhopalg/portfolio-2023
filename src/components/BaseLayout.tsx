"use client";

import { ReactNode } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
