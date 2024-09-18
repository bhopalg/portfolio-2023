"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAVIGATION } from "@/common/constants";

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = NAVIGATION.findIndex((item) => item.href === pathname);
    setActiveIndex(index !== -1 ? index : 0);
  }, [pathname]);

  return (
    <nav className="hidden w-full fixed top-3 z-50 sm:flex justify-center">
      <nav className="bg-zinc-900 border-zinc-800 border p-1 rounded-full inline-flex items-center">
        {NAVIGATION.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 text-sm font-medium relative z-10 transition-colors duration-200 ${
              index === activeIndex ? "text-zinc-900" : "text-zinc-300 hover:text-zinc-50"
            }`}
          >
            {item.name}
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 bg-zinc-300 rounded-full -z-10"
                layoutId="activeBackground"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        ))}
      </nav>
    </nav>
  );
}
