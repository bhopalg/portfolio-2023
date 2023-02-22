import { Tab as HeadlessUITab } from "@headlessui/react";
import classNames from "classnames";
import { ReactNode } from "react";

Tabs.List = function List({ children }: { children: ReactNode }) {
  return (
    <HeadlessUITab.List className="flex space-x-1 rounded-xl bg-zinc-800 ring-1 ring-zinc-300/20 p-1">
      {children}
    </HeadlessUITab.List>
  );
};

Tabs.Tab = function Tab({ children }: { children: ReactNode }) {
  return (
    <HeadlessUITab
      className={({ selected }) =>
        classNames(
          {
            "bg-white text-black shadow": selected,
            "text-zinc-300 hover:bg-white/[0.12] hover:text-white": !selected,
          },
          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
        )
      }
    >
      {children}
    </HeadlessUITab>
  );
};

Tabs.Panels = function Panels({ children }: { children: ReactNode }) {
  return <HeadlessUITab.Panels className="mt-2">{children}</HeadlessUITab.Panels>;
};

Tabs.Panel = function Panel({ children }: { children: ReactNode }) {
  return (
    <HeadlessUITab.Panel className={"rounded-xl text-zinc-300 p-3 bg-zinc-800 ring-1 ring-zinc-300/20"}>
      {children}
    </HeadlessUITab.Panel>
  );
};

export function Tabs({ children }: { children: ReactNode }) {
  return <HeadlessUITab.Group>{children}</HeadlessUITab.Group>;
}
