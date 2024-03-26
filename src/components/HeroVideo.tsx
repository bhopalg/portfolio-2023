import { CLOUD_FRONT_URL } from "@/common/constants";

export default function HeroVideo() {
  return (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      controls={false}
      preload="auto"
      poster={`${CLOUD_FRONT_URL}/space-video.webp`}
      className="absolute z-10 w-auto min-w-full max-h-[calc(100dvh_-_173px)] lg:max-h-[calc(100dvh_-_85px)] max-w-none object-fill"
    >
      <source src={`${CLOUD_FRONT_URL}/space-video.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
