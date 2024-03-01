import { CERTIFICATIONS } from "@/common/constants";
import Link from "next/link";
import Image from "next/image";
import ThingsIKnowItem from "@/components/things-i-know/ThingsIKnowItem";

export default function CertificationList() {
  return (
    <ThingsIKnowItem title="Certifactions" containerClassName="h-full">
      <ul className="grid grid-cols-1 h-full">
        {CERTIFICATIONS.map((props) => (
          <CertificationItem key={props.name} {...props} />
        ))}
      </ul>
    </ThingsIKnowItem>
  );
}

function CertificationItem({ name, image, href }: { name: string; image: string; href: string }) {
  return (
    <li key={name}>
      <Link
        href={href}
        target="_blank"
        className="py-5 bg-zinc-900 ring-1 ring-zinc-300/20 rounded-lg px-5 flex flex-col justify-center items-center hover:bg-zinc-700 transition-colors duration-300 ease-in-out h-full"
      >
        <Image src={image} alt={`${name} badge`} width={100} height={100} />
        <p className="mt-2 text-sm font-semibold leading-6 text-zinc-300">{name}</p>
      </Link>
    </li>
  );
}
