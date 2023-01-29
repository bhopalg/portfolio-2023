import Image from "next/image";

const frameworks = [
  {
    image: "reactjs-icon.svg",
    alt: "ReactJS",
    width: 60,
    height: 60,
    animate: true,
  },
  {
    image: "python-icon.svg",
    alt: "Python",
    width: 60,
    height: 60,
    animate: true,
  },
  {
    image: "mongodb.svg",
    alt: "MongoDB",
    width: 140,
    height: 140,
    animate: false,
  },
  {
    image: "amazon_aws.svg",
    alt: "AWS",
    width: 140,
    height: 140,
    animate: false,
  },
];

export function Frameworks() {
  return (
    <div className={"row-span-1 grid grid-cols-1 gap-6 md:grid-cols-2"}>
      {frameworks.map(({ image, animate, alt, height, width }) => (
        <div key={alt} className={"col-span-1 bg-gray-100 rounded-xl flex justify-center items-center py-8"}>
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            className={animate ? "animate-spin animate-spin-speed-override" : ""}
          />
        </div>
      ))}
    </div>
  );
}
