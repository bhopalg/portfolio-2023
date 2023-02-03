import Image from "next/image";

const socials = [
  {
    name: "GitHub",
    link: "/github-icon.svg",
    image: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    link: "/linkedin-icon.svg",
    image: "/linkedin-icon.svg",
  },
  {
    name: "Twitter",
    link: "/twitter-icon.svg",
    image: "/twitter-icon.svg",
  },
  {
    name: "Instagram",
    link: "/instagram-icon.svg",
    image: "/instagram-icon.svg",
  },
];

export function Socials() {
  return (
    <div className={"col-span-1 bg-gray-200 rounded-xl py-8 grid grid-cols-1 gap-6 sm:grid-cols-2 px-8 items-center"}>
      {socials.map(({ image, link, name }) => (
        <div
          key={name}
          className={"col-span-1 flex flex-row divide-y divide-gray-200 bg-white rounded-lg bg-white shadow h-14"}
        >
          <div className={"relative h-auto flex justify-center bg-dark-blue-500 rounded-l-lg"}>
            <Image src={image} alt={name} width={40} height={40} className={"px-2 filter-white"} />
          </div>
          <div className={"relative h-auto flex items-center px-2"}>
            <h1 className={"font-spaceMono"}>{name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
