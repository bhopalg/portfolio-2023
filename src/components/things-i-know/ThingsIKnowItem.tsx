import { PropsWithChildren } from "react";
import { cn } from "@/lib";

export default function ThingsIKnowItem({
  children,
  title,
  containerClassName,
}: PropsWithChildren<{ title: string; containerClassName?: string }>) {
  return (
    <div className={cn("flex flex-col gap-3", containerClassName)}>
      <h2 className="text-lg leading-8 text-zinc-200">{title}</h2>
      <div className="h-full">{children}</div>
    </div>
  );
}
