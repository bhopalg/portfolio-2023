"use client";

import { Container } from "@/components/container";
import { DesktopNavigation } from "@/components/header/desktop-navigation";
import { MobileNavigation } from "@/components/header/mobile-navigation";
import { updateHeaderStyles } from "@/lib/update-header-styles";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export function Header() {
  const isHomePage = useRouter().pathname === "/";

  const headerRef = useRef();
  const isInitial = useRef(true);

  useEffect(() => {
    const downDelay = 0;
    const upDelay = 64;

    function updateStyles() {
      if (headerRef !== undefined) {
        updateHeaderStyles(isInitial, downDelay, upDelay, headerRef);
      }
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.removeEventListener("scroll", updateStyles, { passive: true });
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <div ref={headerRef} className="top-0 z-10 h-16 pt-6" style={{ position: "var(--header-position)" }}>
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: "var(--header-inner-position)" }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
