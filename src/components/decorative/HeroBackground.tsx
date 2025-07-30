import { useScroll } from "motion/react";
import BackgroundRectangles from "./BackgroundRectangles";
import BackgroundMountainParallax from "./BackgroundMountainParallax";
import AnimatedHeroLogo from "./AnimatedHeroLogo";

export default function HeroBackground() {
  const { scrollY } = useScroll();

  return (
    <>
      <BackgroundRectangles scrollY={scrollY} className="z-20" />
      <BackgroundMountainParallax scrollY={scrollY} />
      <AnimatedHeroLogo
        scrollY={scrollY}
        className="z-10 right-0 sm:right-[70px] -top-[60px] md:-top-[70px] opacity-90"
      />
    </>
  );
}
