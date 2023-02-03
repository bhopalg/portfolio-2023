import { Experience } from "@/components/experience";
import { Frameworks } from "@/components/frameworks";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={"relative"}>
        <Hero />
      </section>
      <section id={"section-2"} className={"relative h-screen flex items-center"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 md:max-w-7xl w-full mx-auto gap-10"}>
          <Experience />
          <div className={"col-span-1 grid grid-rows-1 gap-6 md:grid-rows-2"}>
            <Frameworks />
            <Image src={"/computer.jpg"} className={"rounded-xl w-full"} alt={"Gurps"} width={250} height={250} />
          </div>
          <div className={"col-span-1 bg-gray-100 h-full"}></div>
        </div>
      </section>
    </>
  );
}
