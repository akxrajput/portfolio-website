import React from "react";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div 
      className="resume-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Resume</h2>
      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        className="resume-viewer"
        frameBorder="0"
        width="100%"
        height="600px"
      ></iframe>
    </motion.div>
  );
};

export default Resume;
