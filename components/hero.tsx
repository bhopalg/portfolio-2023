import { HackerText } from "@/components/hacker-text";
import { Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div className={"relative w-full h-screen"}>
      <div className={"absolute w-full h-screen flex bg-black z-10"}>
        <Transition
          className={"flex"}
          show={show}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className={"flex w-full"}>
            <Image src={"hero-background.svg"} alt={"ss"} width={2560} height={947} />
          </div>
        </Transition>
      </div>
      <div className={"absolute w-full h-screen flex z-20 text-white items-center md:px-36"}>
        <div className={"md:max-w-7xl w-full hero-text-typer justify-center flex flex-col"}>
          <HackerText />
          <a
            href={"#section-2"}
            className={
              "w-12 h-12 mx-auto rounded-full bg-dark-blue-500 mt-6 animate-bounce border-2 border-white drop-shadow-2xl"
            }
          >
            <ArrowDownIcon className={"h-full w-6 mx-auto"} />
          </a>
        </div>
      </div>
    </div>
  );
}
