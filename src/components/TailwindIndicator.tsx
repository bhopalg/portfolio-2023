export default function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 flex size-6 items-center justify-center rounded-full bg-zinc-300 p-3 text-sm text-zinc-950">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
