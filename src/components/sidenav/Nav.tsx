"use client";

import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants";
import Link from "next/link";
import { Navigation } from "@/models/Navigation";
import { Disclosure, Transition } from "@headlessui/react";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {!item.children && <NavLink item={item} pathname={pathname} />}
                {item.children && <MultiNav item={item} pathname={pathname} />}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function MultiNav({ item, pathname, parentHref }: { item: Navigation; pathname: string; parentHref?: string }) {
  const href = parentHref ? `${parentHref}${item.href}` : item.href;

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={clsx(
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors ease-in-out text-zinc-50 hover:text-zinc-600 hover:bg-zinc-50 w-full",
              parentHref && "pl-5",
            )}
          >
            <item.icon
              className="text-zinc-400 group-hover:text-zinc-500 flex-shrink-0 h-6 w-6 fill-zinc-400"
              aria-hidden="true"
            />
            {item.name}
          </Disclosure.Button>

          {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
            <Disclosure.Panel static>
              {item.children && (
                <ul role="list" className="space-y-1 w-full">
                  {item.children.map((_item) => (
                    <li key={_item.name} className="w-full">
                      {!_item.children && (
                        <NavLink
                          item={{
                            ..._item,
                            href: `${href}${_item.href}`,
                          }}
                          pathname={pathname}
                          className="pl-8"
                          hasParent={parentHref !== undefined}
                        />
                      )}
                      {_item.children && <MultiNav item={_item} pathname={pathname} parentHref={href} />}
                    </li>
                  ))}
                </ul>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

function NavLink({
  item,
  pathname,
  className,
  hasParent,
}: {
  item: Navigation;
  pathname: string;
  className?: string;
  hasParent?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={clsx(
        pathname === item.href && "bg-zinc-50 text-zinc-600",
        pathname !== item.href && "text-zinc-50 hover:text-zinc-600 hover:bg-zinc-50",
        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors ease-in-out",
        className,
        hasParent && "pl-5",
      )}
    >
      <item.icon
        className={clsx(
          pathname === item.href
            ? "text-zinc-500 fill-zinc-500"
            : "text-zinc-400 group-hover:text-zinc-500 fill-zinc-400 group-hover:fill-zinc-500",
          "flex-shrink-0 h-6 w-6",
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  );
}
