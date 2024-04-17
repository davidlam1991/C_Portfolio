import { motion } from "framer-motion";

export default function IconImage({src, ...props}) {
  return (
    <motion.img
      className="intro-icon"
      whileHover={{ scale: 1.5 }}
      transition={{ type: "spring" }}
      src={src}
      {...props}
    />
  );
}
