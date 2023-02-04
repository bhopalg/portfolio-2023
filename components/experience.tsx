import Image from "next/image";

const frameworks = [
  {
    image: "angular-icon.svg",
    alt: "Angular",
    width: 60,
    height: 60,
  },
  {
    image: "microsoft-azure.svg",
    alt: "Azure",
    width: 110,
    height: 110,
  },
  {
    image: "logo-javascript.svg",
    alt: "JavaScript",
    width: 60,
    height: 60,
  },
  {
    image: "golang.svg",
    alt: "GoLang",
    width: 60,
    height: 60,
  },
];

function Frameworks() {
  return (
    <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2"}>
      {frameworks.map(({ image, height, width, alt }) => (
        <div className={"col-span-1 bg-gray-200 rounded-xl flex justify-center items-center py-8"} key={image}>
          <Image src={image} alt={alt} width={width} height={height} />
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <div className={"col-span-1 h-full bg-inherit flex flex-col gap-5"}>
      <div className={"bg-gray-200 rounded-lg flex flex-col justify-center items-center py-6"}>
        <h1
          className={
            "text-3xl md:text-5xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-dark-blue-300 to-light-blue-300"
          }
        >
          7 Years
        </h1>
        <p className={"font-spaceMono font-thin pt-8"}>Experience</p>
      </div>
      <div className={"bg-gray-200 rounded-lg flex flex-col justify-center items-center py-6"}>
        <p className={"font-spaceMono font-thin pb-8"}>Expertise in Building</p>
        <h1
          className={
            "text-2xl text-center md:text-4xl font-extrabold text-transparent font-spaceMono bg-clip-text bg-gradient-to-r from-dark-blue-300 to-light-blue-300"
          }
        >
          Data analysis tools and apps
        </h1>
        <p className={"font-spaceMono font-thin pt-8"}>for a large user base.</p>
      </div>
      <Frameworks />
    </div>
  );
}
