"use client";

import { ReactNode, useState } from "react";
import Logo from "@/components/Logo";
import Nav from "@/components/sidenav/Nav";
import MobileNav from "@/components/sidenav/MobileNav";
import MobileHeader from "@/components/sidenav/MobileHeader";

export default function SideNavLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <MobileNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-zinc-200 bg-black px-6">
            <div className="flex h-16 shrink-0 items-center justify-center">
              <Logo className="w-8" />
            </div>
            <Nav />
          </div>
        </div>

        <MobileHeader setSidebarOpen={setSidebarOpen} />

        <main className="py-10 lg:pl-72 min-h-screen">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
