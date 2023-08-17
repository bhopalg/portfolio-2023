"use client";

import { ReactNode } from "react";

function OrderedList({ children }: { children: ReactNode }) {
  return <ol className="list-decimal list-inside">{children}</ol>;
}

function UnorderedList({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-inside">{children}</ul>;
}

function ListItem({ children }: { children: ReactNode }) {
  return <li className="py-2 text-zinc-50">{children}</li>;
}

export const List = {
  OL: OrderedList,
  UL: UnorderedList,
  LI: ListItem,
};
