import { DesktopMenu } from "@/components/blogs/desktop-menu";
import { MobileMenu } from "@/components/blogs/mobile-menu";
import { useGetPosts } from "@/lib/use-get-posts";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import { useState } from "react";

export function BlogLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, isLoading, refetch, isError } = useGetPosts();

  console.log(data);

  return (
    <>
      <MobileMenu navigation={data ?? []} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <DesktopMenu navigation={data ?? []} />
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
          <div className="py-6 text-white">{children}</div>
        </main>
      </div>
    </>
  );
}
