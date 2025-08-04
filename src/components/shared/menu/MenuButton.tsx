// Lib
import { useScrollLock } from "./useScrollLock";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

// Components
import { Menu, X } from "lucide-react";
import MenuModal from "./MenuModal";

export default function MenuButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useScrollLock(isOpen);

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <MenuModal setIsOpen={setIsOpen} />
      ) : (
        <motion.div
          initial={{ x: "40px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          style={{
            willChange: "transform, opacity",
          }}
          key="menu-button"
        >
          <motion.button
            className={clsx("hover:cursor-pointer", className)}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            aria-label="Open menu"
          >
            <Menu className="text-dark-2" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
