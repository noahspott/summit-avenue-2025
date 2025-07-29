import { useScroll } from "motion/react";
import BackgroundRectangles from "./BackgroundRectangles";
import BackgroundMountainParallax from "./BackgroundMountainParallax";
import AnimatedHeroLogo from "./AnimatedHeroLogo";

export default function OurWorkBackground() {
  // const { scrollY } = useScroll();

  return (
    <>
      <div className="relative w-full h-full -top-[500px] -left-[850px] sm:-left-[800px] md:-left-[700px] lg:-left-[600px]">
        <div
          className="bg-light-blue-100 absolute h-[2000px] w-[700px] -z-50 top-0 left-32"
          style={{
            rotate: "25deg",
          }}
        />
        <div
          className="bg-light-blue-200 absolute h-[2000px] w-[700px] -z-40 top-0 left-16"
          style={{
            rotate: "25deg",
          }}
        />
        <div
          className="bg-light-blue-300 absolute h-[2000px] w-[700px] -z-30 top-0 left-0"
          style={{
            rotate: "25deg",
          }}
        />
      </div>
    </>
  );
}
