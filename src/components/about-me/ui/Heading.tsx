import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("text-gray-200 font-thin pb-8");

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, children, ...props }, ref) => {
  return (
    <h2 ref={ref} {...props} className={cn(headingVariants({ className }))}>
      {children}
    </h2>
  );
});
Heading.displayName = "Heading";

export default Heading;
