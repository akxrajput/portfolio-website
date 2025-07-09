import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";


const Projects = () => {
  const projectCount = 5;

  return (
    <motion.section 
      className="projects-section"
      id="portfolio"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className="project-count">
        <CountUp end={projectCount} duration={2} delay={0.5} /> Projects Completed
      </div>
    </motion.section>
  );
};

export default Projects;
