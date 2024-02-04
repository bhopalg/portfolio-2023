"use client";

import ErrorReloadButton from "@/components/ErrorReloadButton";

export default function Error() {
  return (
    <div className="grow flex justify-center items-center mx-auto w-full hero-text-typer flex-col gap-5 px-5 relative">
      <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-center items-center mix-blend-difference gap-3">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center">Error</h1>
        <h2 className="text-zinc-200 text-2xl md:text-4xl font-bold text-center">Error loading page</h2>
        <ErrorReloadButton />
      </div>
    </div>
  );
}
