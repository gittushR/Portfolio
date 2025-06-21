import React from "react";
import "./ProjectShowcase.css";
import { FaGithub } from "react-icons/fa";
import SlideInOnScroll from "../../helpers/slideIn/SlideInOnScroll";

const ProjectShowcase = () => {
  return (
    <section className="project-showcase">
      <SlideInOnScroll fromLeft={true}>
        <div className="project-container">
          <div className="project-image-wrapper">
            <img
              src={"./rowdyChat.png"}
              alt="Project"
              className="project-image"
            />
          </div>
          <div className="project-details">
            <h2 className="project-title">
              <span className="highlight">Rowdy AI</span>
              <br />
              Your own not so polite AI companion !!
            </h2>
            <p className="project-description">
              Full stack social media application built with React, Node.js,
              Express.js, MongoDB, Socket.io and AWS S3.
            </p>
            <div className="buttons">
              <a href="#" className="homebutton projectbutton">
                GITHUB <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </SlideInOnScroll>
      <SlideInOnScroll>
        <div className="project-container-end">
          <div className="project-image-wrapper">
            <img
              src={"./rowdyChat.png"}
              alt="Project"
              className="project-image-end"
            />
          </div>
          <div className="project-details-end">
            <h2 className="project-title">
              <span className="highlight">Rowdy AI</span>
              <br />
              Your own not so polite AI companion !!
            </h2>
            <p className="project-description">
              Full stack social media application built with React, Node.js,
              Express.js, MongoDB, Socket.io and AWS S3.
            </p>
            <div className="buttons">
              <a href="#" className="homebutton projectbutton">
                GITHUB <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </SlideInOnScroll>
      <SlideInOnScroll fromLeft={true}>
        <div className="project-container">
          <div className="project-image-wrapper">
            <img
              src={"./rowdyChat.png"}
              alt="Project"
              className="project-image"
            />
          </div>
          <div className="project-details">
            <h2 className="project-title">
              <span className="highlight">Rowdy AI</span>
              <br />
              Your own not so polite AI companion !!
            </h2>
            <p className="project-description">
              Full stack social media application built with React, Node.js,
              Express.js, MongoDB, Socket.io and AWS S3.
            </p>
            <div className="buttons">
              <a href="#" className="homebutton projectbutton">
                GITHUB <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </SlideInOnScroll>
    </section>
  );
};

export default ProjectShowcase;
