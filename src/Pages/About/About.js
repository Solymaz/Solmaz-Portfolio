import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../Style/Animations";
import "./about.css";

const About = () => {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="about-content"
    >
      <div className="aboutMe">
        <h1>About me</h1>
        <p>
          I Started learning frontend development not long time ago. Developing
          is a blend of creativity and logic which is very much me. It is also
          an incredibly powerful skill that enables me to solve daily life
          problems. This is what I am striving for. <br />I am a passionate,
          can-doer, and a detail-oriented person. If you ask my friends and
          colleagues, they would describe me as an energetic woman with
          contagious positive energy. <br />
          When I am not coding, I am most probably either dancing or cooking.
          <br /> I have the heart and soul of a developer and all I lack is
          experience. I like to work with different projects that challenge me.
          Currently, I am actively looking for a new opportunity. A chance to
          exercise and learn more by doing.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
