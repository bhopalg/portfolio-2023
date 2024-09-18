import ThingsIKnowItem from "@/components/things-i-know/ThingsIKnowItem";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import MobileItemsIKnow from "@/components/things-i-know/MobileItemsIKnow";
import { cn } from "@/lib";
import { HOVER_EFFECTS_CLASSNAMES } from "@/common/constants";

interface ItemsIKnowProps {
  items: { name: string; href: string }[];
  title: string;
}

export default function ItemsIKnow({ items, title }: ItemsIKnowProps) {
  return (
    <ThingsIKnowItem title={title}>
      <ul className="sm:flex flex-row flex-wrap gap-5 hidden">
        {items.map(({ name, href }) => (
          <Badge
            key={name}
            variant="secondary"
            className={cn("text-sm hover:bg-transparent hover:border-zinc-800", HOVER_EFFECTS_CLASSNAMES)}
            asChild
          >
            <Link href={href} target="_blank">
              {name}
            </Link>
          </Badge>
        ))}
      </ul>
      <MobileItemsIKnow items={items} />
    </ThingsIKnowItem>
  );
}
