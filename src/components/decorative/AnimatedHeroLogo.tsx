import {
  motion,
  transform,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function AnimatedHeroLogo({ className }: { className: string }) {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100, // Lower = smoother
    damping: 20, // Higher = less bouncy
    mass: 0.5,
  });

  const y = 0;
  const x = 1;

  // Light Blue
  const x1 = useTransform(scrollY, [0, 1000], [0, -x]);
  const y1 = useTransform(scrollY, [0, 1000], [0, -y]);
  const size1 = useTransform(scrollY, [0, 1000], [1000, 500]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  // Mountain Image
  const whiteFadeInTime = 10;
  const whiteFadeOutTime = 300;

  const x2 = useTransform(smoothScrollY, [0, 1000], [0, x * 400]);
  const y2 = useTransform(smoothScrollY, [0, 1000], [0, y]);
  const opacity2 = useTransform(
    smoothScrollY,
    [0, whiteFadeInTime, whiteFadeOutTime],
    [1, 0, 0]
  );

  // White Dummy
  const opacityWhite = useTransform(
    smoothScrollY,
    [0, whiteFadeInTime, whiteFadeOutTime],
    [0, 1, 0]
  );

  return (
    <div ref={targetRef} className={`absolute ${className}`}>
      <div className="relative w-[1000px] h-[1000px]">
        <motion.img
          src="src/assets/images/decorative/logo-light-blue.svg"
          className="absolute w-[1000px] h-[1000px]"
          alt=""
          style={{
            x: x1,
            y: y1,
            opacity: opacity1,
            width: size1,
            height: size1,
            willChange: "transform, opacity",
          }}
        />
        <motion.img
          src="src/assets/images/decorative/logo-mountain.svg"
          className={`absolute w-[1000px] h-[1000px] mix-blend-screen`}
          alt=""
          style={{
            x: x2,
            y: y2,
            opacity: opacity2,
            willChange: "transform, opacity",
          }}
        />
        <motion.img
          src="src/assets/images/decorative/logo-white.svg"
          className={`absolute w-[1000px] h-[1000px]`}
          alt=""
          style={{
            x: x2,
            y: y2,
            opacity: opacityWhite,
            willChange: "transform, opacity",
          }}
        />
      </div>
    </div>
  );
}
