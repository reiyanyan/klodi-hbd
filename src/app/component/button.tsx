import clsxm from "../utils/clsxm";
import { motion } from "framer-motion";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function ({ children, className, onClick }: ButtonProps) {
  return (
    <motion.button
      className={clsxm(
        "flex flex-row gap-x-4 px-6 py-4 text-white font-medium bg-gray-800 rounded-full",
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
