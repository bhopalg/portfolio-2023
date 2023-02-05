import { PostMetadata } from "@/lib/use-get-posts";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function DesktopMenu({ navigation }: { navigation: PostMetadata[] }) {
  const { asPath } = useRouter();

  const currentRoute = useMemo(() => asPath.replace("/blogs/", "").trim(), [asPath]);

  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-400 border-r-2 bg-dark-blue-200">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 flex-1 space-y-1 bg-dark-blue-200 px-2">
            {navigation.map(({ data, slug }) => (
              <a
                key={slug}
                href={slug}
                className={classNames(
                  {
                    "bg-light-blue-200 text-white": currentRoute === slug,
                    "text-white hover:bg-light-blue-300 hover:text-gray-100": currentRoute !== slug,
                  },
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out"
                )}
              >
                {data.title ?? "Untitled"}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 border-t border-gray-400 p-4">
          <Link href="/" className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <ArrowUturnLeftIcon className={"text-white h-5 w-5"} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white group-hover:text-gray-900">Back to site</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
