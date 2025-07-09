import React from "react";
import './intro.css';
import owner from '../images/owner_myportfolio.png';
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.div 
      className="mainOne intro"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="home"
    >
      <div className="leftpart">
        <span className="hello">Hello 👋</span> 
        <span className="Im">I'M <span className="name">Akshay</span></span> 
        <span className="pos">Full-Stack Developer</span> 
        <p className="description">
          I'm a skilled and passionate Web Developer<br />
          with experience crafting beautiful, responsive websites.
        </p>
        <button className="btn-hire">
          <a href="#contact">Hire Me</a>
        </button>
      </div>
      <div className="rightpart">
        <img src={owner} alt="owner" className="ownerImg" />
       

      </div>
    </motion.div>
  );
}

export default Intro;
