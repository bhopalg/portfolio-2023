"use client";

import { EXPERIENCE_START_YEAR } from "@/common/constants";
import { useMemo } from "react";
import Interests from "@/components/Interests";
import { AboutMeItem, Description, Heading, Title } from "@/components/about-me/ui";

export default function Experience() {
  const yearsOfExperience = useMemo(() => {
    return new Date().getFullYear() - EXPERIENCE_START_YEAR;
  }, []);

  return (
    <>
      <AboutMeItem>
        <span className="sr-only">{yearsOfExperience} years of experience</span>
        <Title>{yearsOfExperience} Years</Title>
        <Description>Experience</Description>
      </AboutMeItem>
      <AboutMeItem>
        <span className="sr-only">Expertise in building data analysis tools and apps for a large user base.</span>
        <Heading>Expertise in Building</Heading>
        <Title className="px-5 text-center">Data analysis tools and apps</Title>
        <Description>for a large user base.</Description>
      </AboutMeItem>
      <Interests />
    </>
  );
}
