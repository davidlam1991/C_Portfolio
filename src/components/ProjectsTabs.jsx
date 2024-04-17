import { motion } from "framer-motion";
import { tabs } from "../util/projectsData.js";
import { Col } from "react-bootstrap";

export default function ProjectTabs({ onSelectedTab, selectedTab }) {
  return (
    <Col>
      <div className="projects-tab-names">
        {tabs.map((tab) => (
          <motion.div
            className="projects-tab-name"
            key={tab}
            onClick={() => onSelectedTab(tab)}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              transition={{
                duration: 0.35,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              animate={{
                color: tab === selectedTab ? "#E4E8AB" : "#162316",
              }}
              whileHover={{ color: "#E4E8AB" }}
            >
              {tab}
            </motion.span>

            {tab === selectedTab && (
              <motion.div
                className="projects-select-tab"
                layoutId="tab-indicator"
                transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </Col>
  );
}
