"use client";

import { EXPERIENCE_START_YEAR } from "@/common/constants";
import { ReactNode, useMemo } from "react";
import { cn } from "@/lib";
import Interests from "@/components/Interests";

export function Experience({ isInView }: { isInView: boolean }) {
  const yearsOfExperience = useMemo(() => {
    return new Date().getFullYear() - EXPERIENCE_START_YEAR;
  }, []);

  const transitionsClass = isInView ? "translate-x-0 opacity-100 blur-none" : "-translate-x-40 opacity-0 blur-lg";
  const baseClass = "transition-all ease-in-out duration-700";
  return (
    <div className="col-span-1 h-full bg-inherit flex flex-col gap-5">
      <div
        className={cn(
          transitionsClass,
          baseClass,
          "rounded-lg flex flex-col justify-center items-center py-6 bg-zinc-900 ring-1 ring-zinc-300/20",
        )}
      >
        <span className="sr-only">{yearsOfExperience} years of experience</span>
        <Title>{yearsOfExperience} Years</Title>
        <Description>Experience</Description>
      </div>
      <div
        className={cn(
          transitionsClass,
          baseClass,
          "bg-zinc-900 ring-1 ring-zinc-300/20 rounded-lg flex flex-col justify-center items-center py-6",
        )}
      >
        <span className="sr-only">Expertise in building data analysis tools and apps for a large user base.</span>
        <Heading>Expertise in Building</Heading>
        <Title className="px-5">Data analysis tools and apps</Title>
        <Description>for a large user base.</Description>
      </div>
      <Interests isInView={isInView} />
    </div>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <p className="font-spaceMono text-gray-200 font-thin pb-8">{children}</p>;
}

function Title({ children, className }: { children: ReactNode; className?: string }) {
  const classes = cn(
    "text-2xl text-center md:text-4xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-light-blue-600 to-light-blue-300",
    className,
  );

  return <h1 className={classes}>{children}</h1>;
}

function Description({ children }: { children: ReactNode }) {
  return <p className="font-spaceMono text-gray-200 font-thin pt-8">{children}</p>;
}
