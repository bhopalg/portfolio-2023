"use client";

import Experience from "@/components/Experience";
import Frameworks from "@/components/Frameworks";
import Resume from "@/components/Resume";
import Socials from "@/components/Socials";
import { AboutMeColumn, AboutMeGrid, AboutMeItem, Title } from "./ui";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="about-me"
      className="relative grow flex items-center overflow-x-hidden px-4 sm:px-8 lg:px-12 pb-4 sm:py-8"
      ref={ref}
      animate={controls}
      variants={aboutMeVariants}
      initial="hidden"
    >
      <AboutMeGrid>
        <AboutMeColumn>
          <Experience ref={ref} />
        </AboutMeColumn>
        <AboutMeColumn className="justify-between">
          <motion.div variants={variantYNegative}>
            <Frameworks />
          </motion.div>
          <AboutMeItem className="py-8">
            <span className="sr-only">About Me</span>
            <Title size="large">About Me</Title>
          </AboutMeItem>
          <motion.div variants={variantYPostive}>
            <Resume />
          </motion.div>
        </AboutMeColumn>
        <AboutMeColumn className="justify-between">
          <motion.div variants={variantXPositive} className="h-full">
            <AboutMeItem className="py-8">
              <span className="sr-only">Website</span>
              <Title>Websites</Title>
            </AboutMeItem>
          </motion.div>
          <motion.div variants={variantXPositive} className="h-full">
            <AboutMeItem className="py-8">
              <span className="sr-only">Apps</span>
              <Title>Apps</Title>
            </AboutMeItem>
          </motion.div>
          <motion.div variants={variantXPositive} className="h-full">
            <Socials />
          </motion.div>
        </AboutMeColumn>
      </AboutMeGrid>
    </motion.section>
  );
}

export const aboutMeVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
    },
  },
};

const variantXPositive = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    translateX: 25,
    transition: {
      type: "spring",
    },
  },
};

const variantYNegative = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    translateY: -25,
    transition: {
      type: "spring",
    },
  },
};

const variantYPostive = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    translateY: 25,
    transition: {
      type: "spring",
    },
  },
};
