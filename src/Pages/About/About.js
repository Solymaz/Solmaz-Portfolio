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
      <h1>About me</h1>

      <div className="aboutMe">
        Front-end development is a blend of creativity and logic which is very
        much me. It is also an incredibly powerful skill that enables me to
        solve daily life problems. This is what fascinates me. <br />I am a
        passionate, can-doer, and a detail-oriented person. If you ask my
        friends and colleagues, they would describe me as a fun person to be
        around, with endless positive energy. <br />
        When I am not coding, I am most probably dancing while cooking.
        <br /> I have the heart and soul of a developer and all I lack is
        experience. Currently, I am actively looking for a new challenge. A
        chance to exercise and learn more by doing.
      </div>

      <img className="photo" src="./sol2.JPG" alt="Solmaz" />
    </motion.div>
  );
};

export default About;
