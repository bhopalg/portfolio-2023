import { DesktopMenu } from "@/components/blogs/desktop-menu";
import { MobileMenu } from "@/components/blogs/mobile-menu";
import { MobileMenuButton } from "@/components/blogs/mobile-menu-button";
import { getPosts } from "@/lib/api";
import { useGetPosts } from "@/lib/use-get-posts";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import { Fragment, useState } from "react";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

export function BlogLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, isLoading, refetch, isError } = useGetPosts();

  console.log(data);

  return (
    <>
      <MobileMenu navigation={navigation} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <DesktopMenu navigation={navigation} />
      <div className="flex flex-1 flex-col md:pl-64">
        <MobileMenuButton setSidebarOpen={setSidebarOpen} />
        <main className="flex-1">
          <div className="py-6">{children}</div>
        </main>
      </div>
    </>
  );
}
