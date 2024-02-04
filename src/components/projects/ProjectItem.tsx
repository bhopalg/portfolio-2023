import { Project } from "@/components/projects/project";
import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/components/icons/Link";

interface ProjectItemProps extends Project {}

export default function ProjectItem({ url, description, img, title }: ProjectItemProps) {
  return (
    <li className="relative flex flex-col items-start">
      <Link
        href={url}
        target="_blank"
        className="rounded-lg p-6 bg-zinc-900 ring-1 ring-zinc-300/20 hover:bg-zinc-950 transition-colors duration-300"
      >
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-white ring-0">
          <Image
            alt={`Logo for ${title}`}
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8"
            src={img}
            style={{ color: "transparent" }}
          />
        </div>
        <h2 className="mt-6 text-base font-semibold text-zinc-50">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
          <div>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </div>
        </h2>
        <p className="relative z-10 mt-2 text-sm text-zinc-300">{description}</p>
        <div className="relative z-10 mt-6 flex text-sm font-medium transition text-zinc-200">
          <LinkIcon className="h-6 w-6 flex-none" />
          <span className="ml-2">{url.replace("https://", "")}</span>
        </div>
      </Link>
    </li>
  );
}
