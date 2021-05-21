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
        <br /> Currently, I am looking for a new challenge. A chance to exercise
        and learn more by doing.
      </div>
      <a
        href="https://www.dropbox.com/s/vywlfvcj7iytxr3/Solmaz%20S.Mousavi%20CV.pdf?dl=0"
        target="_blank"
        rel="noreferrer"
        alt="Solmaz Resume"
        className="button hereButton"
      >
        <button className="CV"> Download my CV</button>
      </a>
      <img className="photo" src="./sol.JPG" alt="Solmaz" />
    </motion.div>
  );
};

export default About;
