import { EXPERIENCE_START_YEAR } from "@/common/constants";
import classNames from "classnames";
import Image from "next/image";
import { useMemo } from "react";

const frameworks = [
  {
    image: "angular-icon.svg",
    alt: "Angular",
    width: 60,
    height: 60,
    href: "https://angular.io/",
  },
  {
    image: "microsoft-azure.svg",
    alt: "Azure",
    width: 110,
    height: 110,
    href: "https://azure.microsoft.com/en-us/",
  },
  {
    image: "logo-javascript.svg",
    alt: "JavaScript",
    width: 60,
    height: 60,
    href: "https://www.javascript.com/",
  },
  {
    image: "golang.svg",
    alt: "GoLang",
    width: 60,
    height: 60,
    href: "https://golang.org/",
  },
];

function Frameworks({ isInView }: { isInView: boolean }) {
  return (
    <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2"}>
      {frameworks.map(({ image, height, width, alt, href }) => (
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={href}
          className={classNames(
            {
              "translate-y-40 opacity-0 blur-lg": !isInView,
              "translate-y-0 opacity-100 blur-none": isInView,
            },
            "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 rounded-xl flex justify-center items-center py-8"
          )}
          key={image}
        >
          <Image src={image} alt={alt} width={width} height={height} />
        </a>
      ))}
    </div>
  );
}

export function Experience({ isInView }: { isInView: boolean }) {
  const yearsOfExperience = useMemo(() => {
    return new Date().getFullYear() - EXPERIENCE_START_YEAR;
  }, []);

  return (
    <div className={"col-span-1 h-full bg-inherit flex flex-col gap-5"}>
      <div
        className={classNames(
          {
            "-translate-x-40 opacity-0 blur-lg": !isInView,
            "translate-x-0 opacity-100 blur-none": isInView,
          },
          "transition-all ease-in-out duration-700 rounded-lg flex flex-col justify-center items-center py-6 bg-zinc-900 ring-1 ring-zinc-300/20"
        )}
      >
        <h1
          className={
            "text-3xl md:text-5xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-light-blue-600 to-light-blue-300"
          }
        >
          {yearsOfExperience} Years
        </h1>
        <p className={"font-spaceMono text-gray-200 font-thin pt-8"}>Experience</p>
      </div>
      <div
        className={classNames(
          {
            "-translate-x-40 opacity-0 blur-lg": !isInView,
            "translate-x-0 opacity-100 blur-none": isInView,
          },
          "transition-all ease-in-out duration-700 bg-zinc-900 ring-1 ring-zinc-300/20 rounded-lg flex flex-col justify-center items-center py-6"
        )}
      >
        <p className={"font-spaceMono text-gray-200 font-thin pb-8"}>Expertise in Building</p>
        <h1
          className={
            "text-2xl text-center md:text-4xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-light-blue-600 to-light-blue-300"
          }
        >
          Data analysis tools and apps
        </h1>
        <p className={"font-spaceMono text-gray-200 font-thin pt-8"}>for a large user base.</p>
      </div>
      <Frameworks isInView={isInView} />
    </div>
  );
}
