"use client";

import { SOCIALS } from "@/common/constants";
import classNames from "classnames";
import Image from "next/image";

export function Socials({ isInView }: { isInView: boolean }) {
  return (
    <div className={"col-span-1 rounded-xl grid grid-cols-1 gap-6 sm:grid-cols-2"}>
      {SOCIALS.map(({ image, link, name }) => (
        <a
          rel={"noreferrer"}
          href={link}
          target={"_blank"}
          key={name}
          className={classNames(
            {
              "translate-x-40 opacity-0 blur-lg": !isInView,
              "translate-x-0 opacity-100 blur-none": isInView,
            },
            "col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 hover:bg-zinc-700 transition-all ease-in-out duration-300 rounded-xl justify-center items-center py-8 flex flex-col",
          )}
        >
          <span className={"sr-only"}>Follow me on {name}</span>
          <Image src={image} alt={name} width={60} height={60} className={"px-2 filter-white"} />
          <h1 className={"font-spaceMono text-gray-200 font-thin pt-8"}>{name}</h1>
        </a>
      ))}
    </div>
  );
}
