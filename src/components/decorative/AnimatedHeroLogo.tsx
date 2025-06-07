import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedHeroLogo({ className }: { className: string }) {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();

  const y = 0;
  const x = 1;

  const y1 = useTransform(scrollY, [0, 1000], [0, -y]);
  const y2 = useTransform(scrollY, [0, 1000], [0, y]);

  const x1 = useTransform(scrollY, [0, 1000], [0, -x]);
  const x2 = useTransform(scrollY, [0, 1000], [0, x * 500]);

  const size1 = useTransform(scrollY, [0, 1000], [1000, 500]);
  // const size2 = useTransform(scrollY, [0, 1000], [1000, 1000]);

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const opacity2 = useTransform(scrollY, [0, 100], [1, 0]);

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
            opacity: opacity,
            width: size1,
            height: size1,
          }}
        />
        <motion.img
          src="src/assets/images/decorative/logo-mountain.svg"
          className={`absolute w-[1000px] h-[1000px] ${
            scrollY.get() === 0 && "mix-blend-screen"
          }`}
          alt=""
          style={{
            x: x2,
            y: y2,
            opacity: opacity2,
          }}
        />
      </div>
    </div>
  );
}
