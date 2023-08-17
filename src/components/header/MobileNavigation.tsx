"use client";

import { NAVIGATION } from "@/common/constants";
import { MobileNavItem } from "@/components/header/MobileNavItem";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export function MobileNavigation(props: any) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur shadow-md shadow-zinc-800/5 border border-zinc-700/50 bg-zinc-800 ring-0">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 backdrop-blur-sm bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 bg-zinc-900 ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-6 w-6 text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-400">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y text-base divide-zinc-100/5 text-zinc-300">
                {NAVIGATION.map(({ href, name }) => (
                  <MobileNavItem key={name} href={href}>
                    {name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}
