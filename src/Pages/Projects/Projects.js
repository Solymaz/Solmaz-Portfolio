import React from "react";
import "./projects.css";

const projects = () => {
  return (
    <>
      <div className="projects">
        <h1 className="title">Featured Projects</h1>
        <div className=" project project1">
          <div className="overlay project1-background">
            <div className="project-info">
              <div className="project-text">
                Vanilla JS <div> Weather App</div>
              </div>
              <a
                href="https://lnkd.in/eYEbyNf"
                className="view"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className=" project project2">
          <div className="overlay project2-background">
            <div className="project-info">
              <div className="project-text">
                React JS <div>Todo List App</div>
              </div>
              <a
                href=" https://lnkd.in/eNga-Uh "
                className="view"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className=" project project3">
          <div className="overlay project3-background">
            <div className="project-info">
              <div className="project-text">
                React JS <div>Weather App</div>
              </div>
              <a
                href=" https://lnkd.in/e-wZ3ha "
                className="view"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
