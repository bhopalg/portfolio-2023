import { PostMetadata } from "@/lib/use-get-posts";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";

interface MobileMenuProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  navigation: PostMetadata[];
}

export function MobileMenu({ setSidebarOpen, sidebarOpen, navigation }: MobileMenuProps) {
  const { asPath } = useRouter();

  const currentRoute = useMemo(() => asPath.replace("/blogs/", "").trim(), [asPath]);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-dark-blue-200">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
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
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
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
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
