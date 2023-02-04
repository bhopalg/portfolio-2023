import { Experience } from "@/components/experience";
import { Frameworks } from "@/components/frameworks";
import { Socials } from "@/components/socials";
import classNames from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section id={"section-2"} className={"relative md:h-screen flex items-center px-10"}>
      <div className={"grid grid-cols-1 md:grid-cols-3 md:max-w-7xl w-full mx-auto gap-10"}>
        <Experience isInView={inView} />
        <div className={"col-span-1 grid grid-rows-1 gap-6"}>
          <Frameworks isInView={inView} />
          <Image
            src={"/computer.jpg"}
            className={classNames(
              {
                "translate-y-40 opacity-0 blur-lg": !inView,
                "translate-y-0 opacity-100 blur-none": inView,
              },
              "transition-all ease-in-out duration-700 rounded-xl w-full"
            )}
            alt={"Gurps"}
            width={250}
            height={250}
          />
        </div>
        <div className={"col-span-1 h-full grid grid-cols-1 gap-6"}>
          <div
            className={classNames(
              {
                "translate-x-40 opacity-0 blur-lg": !inView,
                "translate-x-0 opacity-100 blur-none": inView,
              },
              "transition-all ease-in-out duration-700 col-span-1 bg-gray-200 rounded-xl flex justify-center items-center py-8"
            )}
          >
            <h1
              className={
                "text-3xl md:text-5xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-dark-blue-300 to-light-blue-300"
              }
            >
              Websites
            </h1>
          </div>
          <div
            ref={ref}
            className={classNames(
              {
                "translate-x-40 opacity-0 blur-lg": !inView,
                "translate-x-0 opacity-100 blur-none": inView,
              },
              "transition-all ease-in-out duration-700 col-span-1 bg-gray-200 rounded-xl flex justify-center items-center py-8"
            )}
          >
            <h1
              className={
                "text-3xl md:text-5xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-dark-blue-300 to-light-blue-300"
              }
            >
              Apps
            </h1>
          </div>
          <Socials isInView={inView} />
        </div>
      </div>
    </section>
  );
}
