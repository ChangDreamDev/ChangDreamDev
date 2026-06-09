import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="rotate-180 absolute -top-[520px] sm:-top-[460px] md:-top-[390px] lg:-top-[380px] xl:-top-[400px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.mp4" type="video/mp4" />
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
