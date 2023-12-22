"use client";

import { RESUME } from "@/common/constants";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export function Resume({ isInView }: { isInView: boolean }) {
  return (
    <div
      className={clsx(
        !isInView && "translate-y-40 opacity-0 blur-lg",
        isInView && "translate-y-0 opacity-100 blur-none",
        "transition-all ease-in-out duration-700 rounded-xl bg-zinc-900 ring-1 ring-zinc-300/20 p-6",
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <Briefcase className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {RESUME.filter((item) => !item.exclude).map((item) => (
          <li key={item.company} className="flex gap-4">
            <Link
              target={"_blank"}
              href={item.href}
              rel={"noreferrer"}
              className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 border border-zinc-700/50 bg-zinc-800 ring-0"
            >
              {item.icon && <item.icon className="text-zinc-50 h-6 w-6" />}
              {item.logo && <Image src={item.logo} alt={item.company} width={28} height={28} className={"rounded-full"} />}
            </Link>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">{item.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-400">{item.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-500" aria-label={`${item.start} until ${item.end}`}>
                <time dateTime={item.start}>{item.start}</time> <span aria-hidden="true">—</span>
                <time
                  dateTime={
                    String(
                      (
                        item.end as {
                          label: string;
                          dateTime: number;
                        }
                      ).dateTime,
                    ) ?? item.end
                  }
                >
                  {(
                    item.end as {
                      label: string;
                      dateTime: number;
                    }
                  ).label ?? item.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
