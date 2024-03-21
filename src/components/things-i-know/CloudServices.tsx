import ThingsIKnowItem from "@/components/things-i-know/ThingsIKnowItem";
import Link from "next/link";
import { CLOUD_SERVICES, HOVER_EFFECTS_CLASSNAMES } from "@/common/constants";
import { cn } from "@/lib";

export default function CloudServices({ className }: { className?: string }) {
  return (
    <ThingsIKnowItem title="Cloud Services" containerClassName={cn("w-full", className)}>
      <ul className="grid grid-cols-2 gap-5 h-full">
        {CLOUD_SERVICES.map(({ name, href, ...props }) => (
          <li key={name} className="col-span-1 h-full">
            <Link
              href={href}
              target="_blank"
              className={cn(
                "py-5 bg-zinc-900 ring-1 ring-zinc-300/20 rounded-lg px-5 flex flex-col justify-center items-center hover:bg-zinc-700",
                HOVER_EFFECTS_CLASSNAMES,
              )}
            >
              <props.icon className="w-12 h-12 text-zinc-50" />
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-300">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ThingsIKnowItem>
  );
}
