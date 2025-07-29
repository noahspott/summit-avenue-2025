import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundRectangles({
  scrollY,
  className,
}: {
  scrollY: MotionValue<number>;
  className?: string;
}) {
  const targetRef = useRef(null);

  const x1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  const x2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);

  const x3 = useTransform(scrollY, [0, 1000], [0, 0]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div
      ref={targetRef}
      className={`absolute inset-0 overflow-clip pointer-events-none ${className}`}
    >
      <div className="relative w-full h-full -top-[500px] -left-[850px] sm:-left-[800px] md:-left-[700px] lg:-left-[600px]">
        <motion.div
          className="bg-light-blue-100 absolute h-[2000px] w-[700px] -z-50 top-0 left-32"
          style={{
            y: y1,
            x: x1,
            rotate: 25,
          }}
        />
        <motion.div
          className="bg-light-blue-200 absolute h-[2000px] w-[700px] -z-40 top-0 left-16"
          style={{
            y: y2,
            x: x2,
            rotate: 25,
          }}
        />
        <motion.div
          className="bg-light-blue-300 absolute h-[2000px] w-[700px] -z-30 top-0 left-0"
          style={{
            y: y3,
            x: x3,
            rotate: 25,
          }}
        />
      </div>
    </div>
  );
}
