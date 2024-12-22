import React from "react";
import { projectsData } from "../cv";
import Title from "./Shared/Title";

const Projects = () => {
  return (
    <section className="experience section" id="experience">
      <Title title={projectsData.title} />
      <div className="experience__container bd-grid">
        {projectsData.projects.map((project, i) => (
          <div className="experience__content" key={i}>
            <div className="experience__time">
              <span className="experience__rounder" />

              {project.line && <span className="experience__line"></span>}
            </div>
            <div className="experience__data bd-grid">
              <h3 className="experience__title">{project.title}</h3>
              <a href={project.link} className="experience__company">
                {project.link}
              </a>
              <p className="experience__description">{project.describe}</p>
              <a className="project__img__wrapper" href={project.deploy}>
                <img src={project.img} className="projects__img" alt="" />
                <div className="project__img__overlay">Go to {project.title}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
