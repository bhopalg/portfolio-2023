import classNames from "classnames";
import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: { className?: string; children: React.ReactNode },
  ref: ForwardedRef<any>
) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  {
    className,
    children,
    isBackgroundColourRequired,
    ...props
  }: { className?: string; children: React.ReactNode; isBackgroundColourRequired?: boolean },
  ref: ForwardedRef<any>
) {
  return (
    <div ref={ref} className={clsx("relative px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div
        className={classNames(
          {
            "bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl": isBackgroundColourRequired,
          },
          "mx-auto max-w-2xl lg:max-w-5xl"
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
  }: { children: React.ReactNode; className: string; style?: any; isBackgroundColourRequired?: boolean },
  ref: ForwardedRef<any>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer isBackgroundColourRequired={isBackgroundColourRequired}>{children}</InnerContainer>
    </OuterContainer>
  );
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Container.Outer = OuterContainer;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Container.Inner = InnerContainer;
