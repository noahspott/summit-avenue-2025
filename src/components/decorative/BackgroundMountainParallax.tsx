"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const mountainBg = "src/assets/images/decorative/hero-mountain-bg-fade.png";

export default function BackgroundMountainParallax() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax vertical translate
  const y = useTransform(scrollY, [0, 1000], [0, 500]);

  // Opacity from 0.1 to 1 over 250px scroll
  const opacity = useTransform(scrollY, [0, 250], [0.1, 1]);

  return (
    <motion.img
      ref={ref}
      src={mountainBg}
      alt=""
      className="absolute top-[52px] -right-[13px] -z-[60] w-[1201.69px] h-[798px]"
      style={{ y, opacity }}
      draggable={false}
    />
  );
}
