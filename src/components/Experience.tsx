"use client";

import { EXPERIENCE_START_YEAR } from "@/common/constants";
import { forwardRef, useMemo } from "react";
import Interests from "@/components/Interests";
import { AboutMeItem, Description, Heading, Title } from "@/components/about-me/ui";
import * as React from "react";
import { motion } from "framer-motion";

export interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

const Experience = forwardRef<HTMLDivElement, ExperienceProps>((props, ref) => {
  const yearsOfExperience = useMemo(() => {
    return new Date().getFullYear() - EXPERIENCE_START_YEAR;
  }, []);

  return (
    <>
      <motion.div ref={ref} variants={variants} className="h-full">
        <AboutMeItem>
          <span className="sr-only">{yearsOfExperience} years of experience</span>
          <Title>{yearsOfExperience} Years</Title>
          <Description>Experience</Description>
        </AboutMeItem>
      </motion.div>
      <motion.div ref={ref} variants={variants} className="h-full">
        <AboutMeItem ref={ref}>
          <span className="sr-only">Expertise in building data analysis tools and apps for a large user base.</span>
          <Heading>Expertise in Building</Heading>
          <Title className="px-5 text-center">Data analysis tools and apps</Title>
          <Description>for a large user base.</Description>
        </AboutMeItem>
      </motion.div>
      <motion.div ref={ref} variants={variants} className="h-full">
        <Interests />
      </motion.div>
    </>
  );
});
Experience.displayName = "Experience";

export default Experience;

const variants = {
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    translateX: -25,
    transition: {
      type: "spring",
    },
  },
};
