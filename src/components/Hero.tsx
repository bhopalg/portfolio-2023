"use client";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Suspense, useEffect } from "react";
import HeroVideo from "@/components/HeroVideo";

export function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={heroContentVariants}
      initial="hidden"
      className="grow flex justify-center items-center mx-auto w-full hero-text-typer flex-col gap-5 px-5 relative"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <HeroVideo />
      </Suspense>
      <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-center items-center mix-blend-difference">
        <motion.h1 variants={heroContentVariants} className="text-white text-5xl md:text-7xl font-bold text-center">
          Hi, I&apos;m Gurps
        </motion.h1>
        <motion.h2 variants={heroContentVariants} className="text-white text-2xl md:text-4xl font-bold text-center">
          I&apos;m a full-stack developer
        </motion.h2>
      </div>
    </motion.div>
  );
}

export const heroContentVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: -15,
    transition: {
      type: "spring",
      staggerChildren: 0.4,
    },
  },
};
