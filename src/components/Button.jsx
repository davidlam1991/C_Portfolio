import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.button
      type="submit"
      whileHover={{ backgroundColor: "#4c7766", scale: 1.02}}
      transition={{ type: "spring" }}
    >
      <span>Get in touch</span>
    </motion.button>
  );
}
