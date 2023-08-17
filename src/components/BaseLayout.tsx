"use client";

import { ReactNode } from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import { MDXProvider } from "@mdx-js/react";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <MDXProvider>{children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
}
