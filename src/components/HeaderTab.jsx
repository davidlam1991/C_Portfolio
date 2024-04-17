import { motion } from "framer-motion";

export default function HeaderTab({ isSelected, onSelect, children }) {
  return (
    <div>
      <motion.button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring" }}
      >
        {children}
      </motion.button>
      {isSelected && (
        <motion.div layoutId="underline" className="active-tab-header"/>
      )}
      {!isSelected && (
        <div
          className="active-tab-header"
          style={{ visibility: "hidden" }}
        />
      )}
    </div>
  );
}
