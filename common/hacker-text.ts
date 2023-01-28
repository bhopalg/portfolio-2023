import { MutableRefObject } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function hackerText(ref: MutableRefObject<HTMLElement | null>): NodeJS.Timer | null {
  let interval: NodeJS.Timer | null = null;

  if (ref.current !== null) {
    let iteration = 0;

    interval = setInterval(() => {
      if (!ref.current) {
        return;
      }

      const current: any = ref.current;

      current.innerText = current.innerText
        .split("")
        .map((letter: string, index: number) => {
          if (!current) {
            return;
          }

          if (index < iteration) {
            return current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= current.dataset.value.length && interval) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }
  return interval;
}
