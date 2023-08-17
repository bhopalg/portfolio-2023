"use client";

import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Nav from "@/components/sidenav/Nav";
import Logo from "@/components/Logo";

interface MobileNavProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({ setSidebarOpen, sidebarOpen }: MobileNavProps) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <CloseButton setSidebarOpen={setSidebarOpen} />
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black border-r border-zinc-200 px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center justify-center relative z-50">
                  <Logo className="w-10 h-10" />
                </div>
                <Nav />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function CloseButton({ setSidebarOpen }: { setSidebarOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
      <span className="sr-only">Close sidebar</span>
      <XMarkIcon className="h-6 w-6 text-zinc-50" aria-hidden="true" />
    </button>
  );
}