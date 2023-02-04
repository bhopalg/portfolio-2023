import classNames from "classnames";
import Image from "next/image";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/bhopalg",
    image: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gurpreet-bhopal-063a6a73/",
    image: "/linkedin-icon.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/GBhopal",
    image: "/twitter-icon.svg",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/gurps_bhopal?igshid=YmMyMTA2M2Y=",
    image: "/instagram-icon.svg",
  },
];

export function Socials({ isInView }: { isInView: boolean }) {
  return (
    <div className={"col-span-1 rounded-xl grid grid-cols-1 gap-6 sm:grid-cols-2"}>
      {socials.map(({ image, link, name }) => (
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
            "transition-all ease-in-out duration-700 col-span-1 bg-gray-200 hover:bg-gray-400 transition-all ease-in-out duration-300 rounded-xl flex justify-center items-center py-8 flex flex-col"
          )}
        >
          <Image src={image} alt={name} width={60} height={60} className={"px-2 filter-dark-blue"} />
          <h1 className={"font-spaceMono font-thin pt-8"}>{name}</h1>
        </a>
      ))}
    </div>
  );
}
