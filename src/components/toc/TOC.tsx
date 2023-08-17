"use client";

import { MY_DOCS_NAVIGATION } from "@/common/constants";
import Link from "next/link";
import { Navigation } from "@/models/Navigation";

const linkClassName = "text-zinc-50 hover:text-zinc-400 duration-300 ease-in-out transition-colors";

export default function TOC() {
  return (
    <ul>
      {MY_DOCS_NAVIGATION.filter(({ isHome }) => !isHome).map((item, index) => (
        <Item key={item.name} item={item} position={index + 1} />
      ))}
    </ul>
  );
}

function Item({ item, position, parentHref }: { item: Navigation; position: number; parentHref?: string }) {
  const href = parentHref ? `${parentHref}${item.href}` : item.href;
  return (
    <li className="py-2">
      {item.children ? (
        <span className="text-zinc-50">
          {position}. {item.name}
        </span>
      ) : (
        <Link href={href} className={linkClassName}>
          {`${position}. ${item.name}`}
        </Link>
      )}
      {item.children && (
        <ul className="ml-5">
          {item.children.map((_item, index) => (
            <Item key={_item.name} item={_item} position={index + 1} parentHref={href} />
          ))}
        </ul>
      )}
    </li>
  );
}
