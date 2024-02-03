"use client";

export function Hero() {
  return (
    <div className="grow flex justify-center items-center mx-auto w-full hero-text-typer flex-col gap-5 px-5 relative">
      <HeroVideo/>
      <div className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-center items-center mix-blend-difference">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center">Hi, I&apos;m Gurps</h1>
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center">I&apos;m a full-stack developer</h2>
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-10"
      autoPlay
      muted
      loop
      playsInline
      poster="/wave-poster.jpg"
    >
      <source
        src="https://tdgm6zgrnrffbtpu.public.blob.vercel-storage.com/pexels_videos_1777359-zA5dOSTczzgIeN7ZPMPATilH2neIgA.mp4"
        type="video/mp4"
      />
    </video>
  );
}
