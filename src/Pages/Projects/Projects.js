import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../Style/Animations";
import "./projects.css";

const projects = () => {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="projects"
    >
      <h1 className="title">Featured Projects</h1>
      <div className=" project1">
        <div className="project-info">
          <div className="project-text">
            Vanilla JS <div> Weather App 🌦</div>
          </div>
          <a
            href="https://lnkd.in/eYEbyNf"
            className="view"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="overlay" />
        <div className="image-container">
          <img
            alt="Vanilla JS weather app screenshot"
            src="./vanillaProject.PNG"
          />
        </div>
      </div>
      <div className=" project2">
        <div className="project-info">
          <div className="project-text">
            React JS <div>Todo List App 📝</div>
          </div>
          <a
            href=" https://lnkd.in/eNga-Uh "
            className="view"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="overlay" />
        <div className="image-container">
          <img alt=" ReactJS todo app screenshot" src="./toDoApp.PNG" />
        </div>
      </div>
      <div className=" project3">
        <div className="project-info">
          <div className="project-text">
            React JS <div>Weather App 🌈</div>
          </div>
          <a
            href=" https://lnkd.in/e-wZ3ha "
            className="view"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="overlay" />
        <div className="image-container">
          <img
            alt=" ReactJS weather app screenshot"
            src="./reactWeatherApp.PNG"
          />
        </div>
      </div>
      <div className="project4">
        <div className="project-info">
          <div className="project-text">
            React JS <div>Dictionary App 🈳</div>
          </div>
          <a
            href="https://tender-fermi-8f29be.netlify.app/"
            className="view"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="overlay" />
        <div className="image-container">
          <img
            alt=" ReactJS dictionary app screenshot"
            src="./reactDictionaryApp.png"
          />
        </div>
      </div>
      <div className="project5">
        <div className="project-info">
          <div className="project-text">
            React JS <div>Movie Browser 🍿</div>
          </div>
          <a
            href="https://eloquent-meitner-58c294.netlify.app/"
            className="view"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="overlay" />
        <div className="image-container">
          <img
            alt=" ReactJS dictionary app screenshot"
            src="./movieBrowser.png"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default projects;
