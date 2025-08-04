// Components
import { X } from "lucide-react";
import { motion } from "motion/react";

// Data
import { LINKS } from "@/data/links";

export default function MenuModal({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.section
      key="menu-modal"
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      style={{
        willChange: "transform, opacity",
      }}
      transition={{ type: "tween", duration: 0.1, stiffness: 50, damping: 10 }}
      className="bg-gradient-to-br from-primary/100 to-primary/90 fixed inset-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-xl"
    >
      <div className="relative h-full w-full">
        <button className="absolute top-10 right-[5%]">
          <X
            className="text-secondary hover:cursor-pointer hover:text-accent"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          />
        </button>
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {LINKS.map((link) => {
            return (
              <li className="list-none">
                <a
                  className="font-heading font-2 text-secondary hover:text-accent text-right text-4xl uppercase duration-150 hover:cursor-pointer"
                  href={link.href}
                >
                  {link.display}
                </a>
              </li>
            );
          })}
        </nav>
      </div>
    </motion.section>
  );
}
