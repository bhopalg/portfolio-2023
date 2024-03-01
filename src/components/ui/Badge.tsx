import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-zinc-800 focus:ring-zinc-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-zinc-50 text-zinc-900 hover:bg-zinc-50/80",
        secondary: "border-transparent bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80",
        destructive: "border-transparent bg-red-900 text-zinc-50 hover:bg-red-900/80",
        outline: "text-zinc-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "div";
  return <Comp className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
