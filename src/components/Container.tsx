"use client";

import { cn } from "@/lib";
import { ForwardedRef, forwardRef, ReactNode } from "react";

export const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: { className?: string; children: ReactNode },
  ref: ForwardedRef<any>,
) {
  return (
    <div ref={ref} className={cn("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

export const InnerContainer = forwardRef(function InnerContainer(
  {
    className,
    children,
    isBackgroundColourRequired,
    ...props
  }: { className?: string; children: ReactNode; isBackgroundColourRequired?: boolean },
  ref: ForwardedRef<any>,
) {
  return (
    <div ref={ref} className={cn("relative px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div
        className={cn(
          isBackgroundColourRequired && "bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl",
          "mx-auto max-w-2xl lg:max-w-5xl",
        )}
      >
        {children}
      </div>
    </div>
  );
});

export const Container = forwardRef(function Container(
  {
    children,
    isBackgroundColourRequired,
    ...props
  }: { children: ReactNode; className: string; style?: any; isBackgroundColourRequired?: boolean },
  ref: ForwardedRef<any>,
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer isBackgroundColourRequired={isBackgroundColourRequired}>{children}</InnerContainer>
    </OuterContainer>
  );
});
