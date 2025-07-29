"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const mountainBg = "src/assets/images/decorative/hero-mountain-bg-fade.png";

export default function BackgroundMountainParallax({
  scrollY,
}: {
  scrollY: MotionValue<number>;
}) {
  const ref = useRef(null);

  // Parallax vertical translate
  const y = useTransform(scrollY, [0, 1000], [0, 500]);

  // Opacity from 0.1 to 1 over 250px scroll
  const opacity = useTransform(scrollY, [0, 250], [0.1, 1]);

  return (
    <motion.img
      ref={ref}
      src={mountainBg}
      alt=""
      className="absolute top-[52px] -right-[13px] -z-[60] w-full h-auto min-[1203px]:w-[1201.69px] min-[1203px]:h-[798px]"
      style={{ y, opacity }}
      draggable={false}
    />
  );
}
