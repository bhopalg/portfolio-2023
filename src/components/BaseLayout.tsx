"use client";

import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MobileHeaderTitleContextProvider from "@/components/sidenav/context/MobileHeaderTittleContextProvider";
import { Components } from "@mdx-js/react/lib";
import { Heading } from "@/components/mdx/Header";
import { Paragraph } from "@/components/mdx/Paragraph";
import { List } from "@/components/mdx/List";
import { usePathname } from "next/navigation";

const components: Components = {
  h1: Heading.H1 as any,
  h2: Heading.H2 as any,
  h3: Heading.H3 as any,
  h4: Heading.H4 as any,
  p: Paragraph.P as any,
  ol: List.OL as any,
  ul: List.UL as any,
  li: List.LI as any,
};

const queryClient = new QueryClient();

export default function BaseLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MobileHeaderTitleContextProvider>
          {!pathname.includes("my-docs") && <Header />}
          <main>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            <MDXProvider components={components}>{children}</MDXProvider>
          </main>
          <Footer />
          <Analytics />
        </MobileHeaderTitleContextProvider>
      </QueryClientProvider>
    </>
  );
}
