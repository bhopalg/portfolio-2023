import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

export interface AboutMeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const AboutMeItem = forwardRef<HTMLDivElement, AboutMeItemProps>(({ asChild, className, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      {...props}
      className={cn(
        "rounded-lg flex flex-col justify-center items-center py-6 bg-zinc-900 ring-1 ring-zinc-300/20",
        className,
      )}
    >
      {children}
    </Comp>
  );
});
AboutMeItem.displayName = "AboutMeItem";

export default AboutMeItem;
