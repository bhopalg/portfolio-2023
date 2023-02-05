import { PostMetadata } from "@/lib/use-get-posts";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useMemo } from "react";

function LoadingNav() {
  return (
    <div className="mt-5 flex-1 space-y-1 bg-dark-blue-200 px-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="animate-pulse flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out"
        >
          <div className="flex-1 space-y-6 py-1">
            <div className="h-1.5 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Navigation({ navigation, isLoading }: { navigation: PostMetadata[]; isLoading: boolean }) {
  const { asPath } = useRouter();

  const currentRoute = useMemo(() => asPath.replace("/blogs/", "").trim(), [asPath]);

  if (isLoading) {
    return <LoadingNav />;
  }

  return (
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
  );
}
