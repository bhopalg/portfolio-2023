export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full max-h-[calc(100dvh_-_80px_-_173px)] lg:max-h-[calc(100dvh_-_80px_-_85px)] max-w-none"
    >
      <source src="https://d36qya9vwg8890.cloudfront.net/space-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
