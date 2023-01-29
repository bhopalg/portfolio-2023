import { hackerText } from "@/common/hacker-text";
import { useEffect, useRef } from "react";

export function HackerText() {
  const hackerTextOneRef = useRef(null);
  const hackerTextTwoRef = useRef(null);

  useEffect(() => {
    const intervalOne = hackerText(hackerTextOneRef);
    const intervalTwo = hackerText(hackerTextTwoRef);

    return () => {
      intervalOne ? clearTimeout(intervalOne) : null;
      intervalTwo ? clearTimeout(intervalTwo) : null;
    };
  }, [hackerTextOneRef]);

  return (
    <div className="flex flex-col text-center">
      <h1
        ref={hackerTextOneRef}
        className={"text-white text-4xl md:text-8xl font-spaceMono font-bold hackerText uppercase"}
        data-value="Welcome To"
      >
        Welcome To
      </h1>
      <h1
        ref={hackerTextTwoRef}
        className={"text-white text-4xl md:text-8xl font-spaceMono font-bold hackerText uppercase"}
        data-value="Gurps's Portfolio"
      >
        Gurps&apos;s Portfolio
      </h1>
    </div>
  );
}
