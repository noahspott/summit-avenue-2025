import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedHeroLogo({
  scrollY,
  className,
}: {
  scrollY: MotionValue<number>;
  className: string;
}) {
  const targetRef = useRef(null);
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

  const baseSize = 1000;
  const size1 = useTransform(scrollY, [0, 1000], [1000, 500]);
  const scale1 = useTransform(size1, (value) => value / baseSize);

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
      <div className="relative size-[400px] min-[768px]:size-[600px] min-[1024px]:size-[800px] min-[1203px]:size-[1000px]">
        <div className="opacity-50 min-[1203px]:opacity-100">
          <motion.img
            src="src/assets/images/decorative/logo-light-blue.svg"
            className="absolute min-[1203px]:size-[1000px]"
            alt=""
            style={{
              x: x1,
              y: y1,
              opacity: opacity1,
              scale: scale1,
              willChange: "transform, opacity",
            }}
          />
        </div>
        <motion.img
          src="src/assets/images/decorative/logo-mountain.svg"
          className={`absolute size-[1000px] mix-blend-screen hidden min-[1203px]:block`}
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
          className={`absolute hidden min-[1203px]:block  min-[1203px]:size-[1000px]`}
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
