// Lib
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function BackgroundLogo({
  className = "",
}: {
  className?: string;
}) {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();

  // useEffect(() => {
  //   scrollY.on("change", (latest) => {
  //     console.log("ScrollY:", latest);
  //     console.log("x1", x1);
  //   });
  // }, [scrollY]);

  const val1 = 100;
  const val2 = 200;
  const val3 = 300;

  const x1 = useTransform(scrollY, [2000, 5000], [0, 2 * val1]);
  const y1 = useTransform(scrollY, [2000, 5000], [0, -val1]);

  const x2 = useTransform(scrollY, [2000, 5000], [0, 2 * val2]);
  const y2 = useTransform(scrollY, [2000, 5000], [0, -val2]);

  const x3 = useTransform(scrollY, [2000, 5000], [0, 2 * val3]);
  const y3 = useTransform(scrollY, [2000, 5000], [0, -val3]);

  return (
    <div
      ref={targetRef}
      className={`absolute bottom-0 right-24 w-[650px] h-[500px] ${className}`}
    >
      <motion.div
        className="absolute -top-16 -right-16 w-[650px]"
        style={{
          x: x3,
          y: y3,
        }}
      >
        <img
          src={"src/assets/images/decorative/testimonial-bg-logo-3.svg"}
          alt=""
        />
      </motion.div>
      <motion.div
        className="absolute -top-8 -right-8 w-[650px]"
        style={{
          x: x2,
          y: y2,
        }}
      >
        <img
          src={"src/assets/images/decorative/testimonial-bg-logo-2.svg"}
          alt=""
        />
      </motion.div>
      <motion.div
        className="absolute top-0 w-[650px]"
        style={{
          x: x1,
          y: y1,
        }}
      >
        <img
          src={"src/assets/images/decorative/testimonial-bg-logo-1.svg"}
          alt=""
        />
      </motion.div>
    </div>
  );
}
