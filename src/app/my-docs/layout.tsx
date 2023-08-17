import { ReactNode } from "react";
import SideNavLayout from "@/components/sidenav/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gurp's Portfolio My Docs",
  description: "Just my an app for my docs",
  keywords: [
    "docs",
    "documentation",
    "tailwindcss",
    "tailwind",
    "tailwindcss docs",
    "tailwindcss documentation",
    "useful links",
    "useful",
    "links",
    "shapers",
    "helpers",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <SideNavLayout>{children}</SideNavLayout>;
}
