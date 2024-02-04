import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib";

export interface AboutMeGridProps extends React.HTMLAttributes<HTMLDivElement> {}

const AboutMeGrid = forwardRef<HTMLDivElement, AboutMeGridProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn("grid grid-cols-1 lg:grid-cols-3 md:max-w-7xl w-full mx-auto gap-7", className)}>
      {children}
    </div>
  );
});
AboutMeGrid.displayName = "AboutMeGrid";

export default AboutMeGrid;
