import ThingsIKnowItem from "@/components/things-i-know/ThingsIKnowItem";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import MobileItemsIKnow from "@/components/things-i-know/MobileItemsIKnow";

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
            className="text-sm hover:bg-zinc-700 duration-300 ease-in-out transition-colors"
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
