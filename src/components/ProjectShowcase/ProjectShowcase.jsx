import "./projectShowcase.css";
import { FaGithub } from "react-icons/fa";
import SlideInOnScroll from "../../helpers/slideIn/SlideInOnScroll";

const ProjectShowcase = () => {
  return (
    <section className="project-showcase">
      <SlideInOnScroll fromLeft={true}>
        <div className="project-container">
          <a
            href="https://github.com/gittushR/RowdyAI"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="project-image-wrapper">
              <img
                src={"./rowdyChat.webp"}
                alt="Project"
                className="project-image"
                loading="lazy"
              />
            </div>
          </a>
          <div className="project-details">
            <h2 className="project-title">
              <span className="highlight">Rowdy AI</span>
              <br />
              Your own not so polite AI companion !!
            </h2>
            <p className="project-description">
              A full stack SaaS AI platform with a sarcastic edge, built using
              React, Node.js, and Gemini 2.0 API, supporting image and text
              input with secure, session-persistent interactions.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/gittushR/RowdyAI"
                className="homebutton projectbutton"
                rel="noopener noreferrer"
                target="_blank"
              >
                GITHUB <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </SlideInOnScroll>
      <SlideInOnScroll>
        <div className="project-container-end">
          <a
            href="https://github.com/gittushR/DocThor"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="project-image-wrapper">
              <img
                src={"./docthor.webp"}
                alt="Project"
                className="project-image-end"
                loading="lazy"
              />
            </div>
          </a>
          <div className="project-details-end">
            <h2 className="project-title">
              <span className="highlight">DOCTHOR</span>
              <br />
              An AI doc that listens, looks, and <br></br>chats back with health
              tips.
            </h2>
            <p className="project-description">
              Built using Python, FastAPI, and Gradio, this AI doctor app
              processes voice and image inputs to deliver health suggestions via
              text-to-speech in a multi-modal setup.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/gittushR/DocThor"
                className="homebutton projectbutton"
                rel="noopener noreferrer"
                target="_blank"
              >
                GITHUB <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </SlideInOnScroll>
      <SlideInOnScroll fromLeft={true}>
        <div className="project-container">
          <a
            href="https://github.com/gittushR/Job_App_Backend"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="project-image-wrapper">
              <img
                src={"./jobapp.webp"}
                alt="Project"
                className="project-image"
                loading="lazy"
              />
            </div>
          </a>
          <div className="project-details">
            <h2 className="project-title">
              <span className="highlight">Job Listings</span>
              <br />
              An full stack, clean and simple job portal for posting and
              browsing jobs, built from scratch.
            </h2>
            <p className="project-description">
              A full-stack job portal built with React and Spring Boot,
              featuring RESTful APIs, Spring Security, and modular admin-user
              workflows.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/gittushR/Job_App_Backend"
                className="homebutton projectbutton"
                rel="noopener noreferrer"
                target="_blank"
              >
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
