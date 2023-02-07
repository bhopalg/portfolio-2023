import { MutableRefObject } from "react";

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function setProperty(property: string, value: string | null) {
  document.documentElement.style.setProperty(property, value);
}

function removeProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}

export function updateHeaderStyles(isInitial: MutableRefObject<boolean>, downDelay: number, upDelay: number) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { top, height } = headerRef.current.getBoundingClientRect();
  const scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);

  if (isInitial.current) {
    setProperty("--header-position", "sticky");
  }

  setProperty("--content-offset", `${downDelay}px`);

  if (isInitial.current || scrollY < downDelay) {
    setProperty("--header-height", `${downDelay + height}px`);
    setProperty("--header-mb", `${-downDelay}px`);
  } else if (top + height < -upDelay) {
    const offset = Math.max(height, scrollY - upDelay);
    setProperty("--header-height", `${offset}px`);
    setProperty("--header-mb", `${height - offset}px`);
  } else if (top === 0) {
    setProperty("--header-height", `${scrollY + height}px`);
    setProperty("--header-mb", `${-scrollY}px`);
  }

  if (top === 0 && scrollY >= downDelay) {
    setProperty("--header-inner-position", "fixed");
    removeProperty("--header-top");
  } else {
    removeProperty("--header-inner-position");
    setProperty("--header-top", "0px");
  }
}
