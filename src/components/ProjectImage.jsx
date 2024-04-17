import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ProjectImage({ imgUrl, title, sectionItem }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <motion.div
      className="proj-imgbx"
      ref={ref}
      initial={ inView ? {opacity: 0, y: 60} : {opacity: 0, y: 60} }
      animate={inView ? { opacity: 1, y: [60, 10, 0] } : {}}
      // exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      whileHover={{ scale: 1.02 }}
    >
      <img src={imgUrl} alt={title} />
      <div className="proj-txt">
        <p>{sectionItem}</p>
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
}
