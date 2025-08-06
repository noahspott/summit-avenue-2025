import { useScroll, motion } from "motion/react";
import BackgroundRectangles from "./BackgroundRectangles";
import BackgroundMountainParallax from "./BackgroundMountainParallax";
import AnimatedHeroLogo from "./AnimatedHeroLogo";
import AnimateIn from "./AnimateIn";

export default function HeroBackground() {
  const { scrollY } = useScroll();

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BackgroundRectangles scrollY={scrollY} className="z-20" />
      </motion.div>

      <AnimateIn>
        <BackgroundMountainParallax scrollY={scrollY} />
      </AnimateIn>

      <div className="opacity-30 lg:opacity-100 hidden sm:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.2 }}
          style={{
            willChange: "opacity",
          }}
        >
          <AnimatedHeroLogo
            scrollY={scrollY}
            className="z-10 right-0 sm:right-[70px] bottom-0 lg:bottom-auto lg:-top-[70px]"
          />
        </motion.div>
      </div>
    </>
  );
}
