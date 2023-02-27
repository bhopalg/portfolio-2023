import classNames from "classnames";
import Image from "next/image";

const frameworks = [
  {
    image: "reactjs-icon.svg",
    alt: "ReactJS",
    width: 60,
    height: 60,
    animate: true,
    href: "https://reactjs.org/",
  },
  {
    image: "python-icon.svg",
    alt: "Python",
    width: 60,
    height: 60,
    animate: false,
    href: "https://www.python.org/",
  },
  {
    image: "mongodb.svg",
    alt: "MongoDB",
    width: 140,
    height: 140,
    animate: false,
    href: "https://www.mongodb.com/",
  },
  {
    image: "amazon_aws.svg",
    alt: "AWS",
    width: 140,
    height: 140,
    animate: false,
    href: "https://aws.amazon.com/",
  },
];

export function Frameworks({ isInView }: { isInView: boolean }) {
  return (
    <div className={"row-span-1 grid grid-cols-1 gap-6 md:grid-cols-2"}>
      {frameworks.map(({ image, animate, alt, height, width, href }) => (
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={href}
          key={alt}
          className={classNames(
            {
              "-translate-y-40 opacity-0 blur-lg": !isInView,
              "translate-y-0 opacity-100 blur-none": isInView,
            },
            "transition-all ease-in-out duration-700 col-span-1 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-700 hover:bg-zinc-700 rounded-xl flex justify-center items-center py-8"
          )}
        >
          <span className={"sr-only"}>{alt} Image</span>
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            className={animate ? "animate-spin animate-spin-speed-override" : ""}
          />
        </a>
      ))}
    </div>
  );
}
