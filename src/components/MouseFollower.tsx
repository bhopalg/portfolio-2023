"use client";

import { useEffect } from "react";

export default function MouseFollower() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.pageX;
      const y = event.pageY;

      const cube = document.getElementById("cube");

      if (!cube) {
        return;
      }
      cube.style.left = `${x}px`;
      cube.style.top = `${y}px`;
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cube"
      style={{ transition: "left 0.1s, top 0.1s" }}
      className="hidden md:block absolute w-10 h-10 bg-zinc-200 z-50 rounded-full mix-blend-difference"
    ></div>
  );
}
