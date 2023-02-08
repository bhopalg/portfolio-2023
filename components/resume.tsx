import { RESUME } from "@/common/constants";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Resume() {
  return (
    <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-300/20 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {RESUME.map(({ logo, company, start, title, end, href }, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <a
              target={"_blank"}
              href={href}
              rel={"noreferrer"}
              className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            >
              <Image src={logo} alt={company} width={28} height={28} className={"rounded-full"} />
            </a>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{title}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${start} until ${end}`}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                <time dateTime={start}>{start}</time> <span aria-hidden="true">—</span> {/*@ts-ignore*/}
                <time dateTime={end.dateTime ?? end}>{end.label ?? end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
