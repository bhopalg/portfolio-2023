"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";
import { useMobileHeaderTitleContext } from "@/components/sidenav/context/MobileHeaderTittleContextProvider";

export default function MobileHeader({ setSidebarOpen }: { setSidebarOpen: Dispatch<SetStateAction<boolean>> }) {
  const { title } = useMobileHeaderTitleContext();
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-black border-b border-zinc-200 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" className="-m-2.5 p-2.5 ext-zinc-50 lg:hidden" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-zinc-50">{title ? title : "Dashboard"}</div>
    </div>
  );
}
