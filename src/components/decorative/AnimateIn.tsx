import { motion, type Transition } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  initialOpacity?: number;
  finalOpacity?: number;
  isBouncy?: boolean;
};

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 0,
  className = "",
  initialOpacity = 0,
  finalOpacity = 1,
  isBouncy = false,
}: AnimateInProps) {
  const transition: Transition = isBouncy
    ? {
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 1,
        delay,
      }
    : {
        type: "tween",
        ease: "easeOut",
        duration,
        delay,
      };

  return (
    <motion.div
      initial={{ opacity: initialOpacity, y }}
      animate={{ opacity: finalOpacity, y: 0 }}
      transition={transition}
      className={className}
      style={{
        willChange: "opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
