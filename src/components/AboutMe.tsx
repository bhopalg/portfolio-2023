"use client";

import { Experience } from "@/components/Experience";
import { Frameworks } from "@/components/Frameworks";
import { Resume } from "@/components/Resume";
import { Socials } from "@/components/Socials";
import { useMediaQuery } from "@/lib/use-media-query";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { ReactNode } from "react";

export function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const isMobile = useMediaQuery(1024);

  return (
    <section
      id="about-me"
      className="relative lg:min-h-[calc(100vh_-_190px)] flex items-center px-10 overflow-x-hidden lg:py-0 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 md:max-w-7xl w-full mx-auto gap-7">
        <Experience isInView={isMobile ? true : inView} />
        <div className={"col-span-1 grid grid-rows-1 gap-6"}>
          <Frameworks isInView={isMobile ? true : inView} />
          <div
            className={clsx(
              !isMobile
                ? {
                    "opacity-0 blur-lg": !inView,
                    "opacity-100 blur-none": inView,
                  }
                : null,
              "col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl flex justify-center items-center py-8",
            )}
          >
            <span className={"sr-only"}>About Me</span>
            <Title>About Me</Title>
          </div>
          <Resume isInView={isMobile ? true : inView} />
        </div>
        <div className={"col-span-1 h-full grid grid-cols-1 gap-6"}>
          <div
            className={clsx(
              !isMobile
                ? {
                    "-translate-y-40 opacity-0 blur-lg": !inView,
                    "translate-y-0 opacity-100 blur-none": inView,
                  }
                : null,
              "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl flex justify-center items-center py-8",
            )}
          >
            <span className={"sr-only"}>Website</span>
            <Title>Websites</Title>
          </div>
          <div
            ref={!isMobile ? ref : null}
            className={clsx(
              !isMobile
                ? {
                    "-translate-y-40 opacity-0 blur-lg": !inView,
                    "translate-y-0 opacity-100 blur-none": inView,
                  }
                : null,
              "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl flex justify-center items-center py-8",
            )}
          >
            <span className={"sr-only"}>Apps</span>
            <Title>Apps</Title>
          </div>
          <Socials isInView={isMobile ? true : inView} />
        </div>
      </div>
    </section>
  );
}

function Title({ children, className }: { children: ReactNode; className?: string }) {
  const classes = clsx(
    "text-3xl md:text-5xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-light-blue-600 to-light-blue-300",
    className,
  );

  return <h1 className={classes}>{children}</h1>;
}
