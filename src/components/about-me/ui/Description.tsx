import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("text-gray-200 font-thin pt-8");

export interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof headingVariants> {}

const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(({ className, children, ...props }, ref) => {
  return (
    <p className={cn(headingVariants({ className }))} ref={ref} {...props}>
      {children}
    </p>
  );
});
Description.displayName = "Description";

export default Description;
