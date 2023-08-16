"use client";

import { Container } from "@/components/container";
import { Prose } from "@/components/prose";
import { formatDate } from "@/lib/format-date";
import { Tooltip } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: {
  children: React.ReactNode;
  meta: { title: string; description: string; date: string; author: string; github?: string; keywords?: string[] };
  isRssFeed?: boolean;
  previousPathname?: string;
}) {
  const router = useRouter();

  if (isRssFeed) {
    return children;
  }

  const { title, github, date, description, author, keywords } = meta;

  return (
    <>
      <Head>
        <title>{title} | Gurpreet Bhopal</title>
        <meta charSet={"utf-8"} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        {keywords && <meta name="keywords" content={keywords?.join(", ")} />}
      </Head>
      <Container className={"mt-16 lg:mt-32"} isBackgroundColourRequired={true}>
        <div className="xl:relative py-14">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 transition border border-zinc-700/50 bg-zinc-800 dark:ring-0 ring-white/10 hover:border-zinc-700 hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 transition stroke-zinc-500 group-hover:stroke-zinc-400" />
              </button>
            )}
            <article className={"md:px-0 px-5"}>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h1>
                <time dateTime={date} className="order-first flex items-center text-base text-zinc-500">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                  <span className="ml-3">{formatDate(date)}</span>
                </time>
                <div className={"flex gap-6 items-center pt-3"}>
                  {author && <p className={"text-base text-zinc-500"}>By {author}</p>}
                  {github && (
                    <Tooltip content={`Check out the repository over on GitHub`}>
                      <a href={github} target={"_blank"} rel={"noreferrer"} className={"col-span-1"}>
                        <Image src={"/github-icon.svg"} className={"filter-white"} alt={"GitHub"} width={20} height={20} />
                      </a>
                    </Tooltip>
                  )}
                </div>
              </header>
              <Prose className="mt-8 text-zinc-300">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
