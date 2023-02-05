import { DesktopMenu } from "@/components/blogs/desktop-menu";
import { MobileMenu } from "@/components/blogs/mobile-menu";
import { useGetPosts } from "@/lib/use-get-posts";
import { Bars3BottomLeftIcon, XCircleIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useState } from "react";

function LoadingLayout() {
  return (
    <div className="p-4 w-full mt-8">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorLayout() {
  const { reload } = useRouter();

  return (
    <div className="rounded-md bg-red-50 p-4 max-w-xl mx-auto mt-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error loading posts</h3>
          <div className="mt-2 text-sm text-red-700">
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul role="list" className="list-disc space-y-1 pl-5">
              <li>
                <button type={"button"} onClick={() => reload()}>
                  Reload page
                </button>
              </li>
              <li>
                <Link href={"/"}>Back to site</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogLayout({ children, metadata }: { children: ReactNode; metadata: { [key: string]: any } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, isLoading, isError } = useGetPosts();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <MobileMenu isLoading={isLoading} navigation={data ?? []} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <DesktopMenu isLoading={isLoading} navigation={data ?? []} />
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-2 left-2 bg-transparent z-10 bg-black pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden w-10 h-10">
          <button
            onClick={() => setSidebarOpen(true)}
            type="button"
            className="inline-flex items-center rounded-full border border-transparent bg-dark-blue-200 p-1 text-white shadow-sm hover:bg-dark-blue-400 focus:outline-none focus:ring-2 focus:ring-dark-blue-300 focus:ring-offset-2"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 sm:px-6 lg:px-8">
          {isLoading && !isError && <LoadingLayout />}
          {!isLoading && !isError && (
            <div className="py-6 text-white">
              <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:px-8">
                <div className="lg:pl-8">
                  <div className="text-base lg:max-w-5xl">
                    <h2 className="font-semibold leading-6 text-indigo-600">{metadata.date ?? "No Date"}</h2>
                    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-100 sm:text-4xl">
                      {metadata.title ?? "Untitled"}
                    </h3>
                    <div className={"pt-10"}>{children}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isError && <ErrorLayout />}
        </main>
      </div>
    </>
  );
}
