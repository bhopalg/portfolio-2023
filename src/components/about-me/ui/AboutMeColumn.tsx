import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib";

export interface AboutMeColumnProps extends React.HTMLAttributes<HTMLDivElement> {}

const AboutMeColumn = forwardRef<HTMLDivElement, AboutMeColumnProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn("col-span-1 h-full bg-inherit flex flex-col gap-5", className)}>
      {children}
    </div>
  );
});
AboutMeColumn.displayName = "AboutMeColumn";

export default AboutMeColumn;
