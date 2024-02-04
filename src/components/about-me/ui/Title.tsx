import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib";
import { cva, VariantProps } from "class-variance-authority";

const titleVariants = cva(
  "font-extrabold text-transparent font-roboto bg-clip-text bg-gradient-to-r from-zinc-50 to-zinc-400",
  {
    variants: {
      size: {
        default: "text-2xl md:text-4xl ",
        large: "text-3xl md:text-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ className, children, size, ...props }, ref) => {
  return (
    <h1 ref={ref} {...props} className={cn(titleVariants({ size, className }))}>
      {children}
    </h1>
  );
});
Title.displayName = "Title";

export default Title;
