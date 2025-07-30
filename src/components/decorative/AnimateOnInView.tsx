import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimateOnInView({
  children,
  delay = 0,
  isFirst = false,
}: {
  children: React.ReactNode;
  delay?: number;
  isFirst?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: isFirst ? "0px" : "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}
