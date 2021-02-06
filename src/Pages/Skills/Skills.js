import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../Style/Animations";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import {
  DiCss3,
  DiReact,
  DiBootstrap,
  DiJavascript,
  DiHtml5,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

import "./skills.css";

const Skills = () => {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="skills"
    >
      <h1>Skills</h1>
      <div className="skillTable">
        <div>
          <DiHtml5 />
          <div className="skillName">HTML 5</div>
        </div>
        <div>
          <DiCss3 />
          <div className="skillName">CSS 3</div>
        </div>
        <div>
          <DiJavascript />
          <div className="skillName">JavaScript ES6</div>
        </div>
        <div>
          <DiReact />
          <div className="skillName">ReactJS 16.8</div>
        </div>
        <div>
          <DiBootstrap />
          <div className="skillName">Bootstrap</div>
        </div>
        <div>
          <AiOutlineGithub />
          <div className="skillName">GitHub</div>
        </div>
        <div>
          <SiRedux />
          <div className="skillName">Redux</div>
        </div>
        <div>
          <BsGrid1X2 />
          <div className="skillName">CSS Grid</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
