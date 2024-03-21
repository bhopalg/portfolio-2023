"use mobile";

import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
import { cn } from "@/lib";
import { HOVER_EFFECTS_CLASSNAMES } from "@/common/constants";

export default function MobileItemsIKnow({ items }: { items: { name: string; href: string }[] }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap flex sm:hidden">
      <ul className="flex w-max space-x-4">
        {items.map(({ name, href }) => (
          <Badge key={name} variant="secondary" className={cn("text-sm hover:bg-zinc-700", HOVER_EFFECTS_CLASSNAMES)} asChild>
            <Link href={href} target="_blank">
              {name}
            </Link>
          </Badge>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
