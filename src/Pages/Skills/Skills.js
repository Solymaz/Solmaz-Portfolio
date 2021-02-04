import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul className="skillTable">
        <li>HTML 5</li>
        <img src="./done.svg" className="done" />
        <li>CSS 3</li>
        <img src="./done.svg" className="done" />
        <li>JavaScript (ES6)</li>
        <img src="./done.svg" className="done" />
        <li>ReactJS 16 (React hooks)</li>
        <img src="./done.svg" className="done" />
        <li>CSS Grid</li>
        <img src="./done.svg" className="done" />
        <li>Bootstrap</li>
        <img src="./done.svg" className="done" />
        <li>Version control (Github)</li>
        <img src="./done.svg" className="done" />
        <li>Redux</li>
        <img src="./loading.gif" className="loading" />
      </ul>
    </div>
  );
};

export default Skills;
