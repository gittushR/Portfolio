import React, { useEffect } from "react";
import "./projects.css";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";
import { FaGithub } from "react-icons/fa";
import ProjectGridItem from "../../components/ProjectPageGridComp/ProjectGridItem";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projectsPage">
      <div className="projectsContainer">
        <h1>PERSONAL PROJECTS</h1>
        <div className="projectsGrid">
          <ProjectGridItem
            projectName={"ROWDY AI"}
            videoLink={"/Video/Rowdyv2.mp4"}
            gitLink={"https://github.com/gittushR/RowdyV2"}
            aboutProj={`Built a bold, sarcastic AI platform that delivers dynamic text
                and image interactions, enhancing user engagement and deepening
                my understanding of secure, persistent conversational systems.`}
            techUsed={[
              "Javascript",
              "ReactJS",
              "Express",
              "NodeJS",
              "MongoDB",
              "Gemini",
              "ImageKit",
            ]}
          ></ProjectGridItem>
          <ProjectGridItem
            projectName={"DOCTHOR"}
            videoLink={"/Video/Docthor.mp4"}
            gitLink={"https://github.com/gittushR/DocThor"}
            aboutProj={`An AI-driven virtual doctor that processes voice and image
                inputs to provide health suggestions in a conversational,
                voice-based format, creating intuitive, human-like interaction
                system.`}
            techUsed={[
              "Python",
              "Gradio",
              "GTTS",
              "Pydub",
              "FFmpeg",
              "meta-llama-4-socut",
              "Groq",
            ]}
          ></ProjectGridItem>
          <ProjectGridItem
            projectName={"rollORhold"}
            videoLink={"/Video/Rollorhold.mp4"}
            gitLink={"https://github.com/gittushR/RollORHold"}
            aboutProj={`An AI-driven virtual doctor that processes voice and image
                inputs to provide health suggestions in a conversational,
                voice-based format, creating intuitive, human-like interaction
                system.`}
            techUsed={[
              "Vanilla JS",
              "Tailwind CSS",
              "HTML",
              "DOM Manipulation",
            ]}
            playlink={"https://rollorhold.netlify.app/"}
          ></ProjectGridItem>
          <ProjectGridItem
            projectName={"Smashbug"}
            videoLink={"/Video/Smashbug.mp4"}
            gitLink={"https://github.com/gittushR/RollORHold"}
            aboutProj={`An AI-driven virtual doctor that processes voice and image
                inputs to provide health suggestions in a conversational,
                voice-based format, creating intuitive, human-like interaction
                system.`}
            techUsed={["Vanilla JS", "HTML/CSS", "DOM Manipulation"]}
            playlink={"https://smashbug.netlify.app/"}
          ></ProjectGridItem>
          <ProjectGridItem
            projectName={"Job Listings"}
            videoLink={"/Video/Jobapp.mp4"}
            gitLink={"https://github.com/gittushR/Job_App_Backend"}
            aboutProj={`Built a job portal that enables efficient job posting management and discovery through a streamlined user experience. Focused mainly on building the seamless API-driven communication between systems. `}
            techUsed={[
              "Java",
              "SpringBoot",
              "ReactJS",
              "PostgreSQL",
              "Spring Data JPA",
              "Tomcat",
            ]}
          ></ProjectGridItem>
          <div className="gridItem">
            <div className="projectVid">
              <img
                src="/forkify.webp"
                alt="forkify App Image"
                className="projectVid"
                loading="lazy"
              />
            </div>
            <div className="projectHeader">
              <h2>Forkify</h2>
              <div className="projectLinks">
                <a
                  href={"https://github.com/gittushR/forkifyApp"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub></FaGithub>
                </a>
              </div>
            </div>
            <div className="projectabout">
              <p>
                Built Forkify, a cross-platform recipe app with a clean,
                multi-screen interface and a focus on smooth, engaging user
                experience. Designed with Material UI to deliver a consistent
                look and feel across Android and iOS.
              </p>
            </div>
            <div className="projectTech">
              <div className="techUsed">
                <span className="tech">FlutterSDK</span>
                <span className="tech">Dart</span>
                <span className="tech">Material UI</span>
                <span className="tech">Android 33</span>
              </div>
            </div>
          </div>
          <ProjectGridItem
            projectName={"Foodcourt"}
            videoLink={"/Video/Footcourt.mp4"}
            gitLink={"https://github.com/gittushR/Footcourt"}
            aboutProj={`Designed and developed a fully responsive food delivery website with a strong focus on clean UI, intuitive navigation, and engaging user experience.  `}
            techUsed={["Vanilla JS", "HTML", "CSS", "Media Queries"]}
            playlink={"https://foodcourtproject.netlify.app/"}
          ></ProjectGridItem>
          <div className="gridItem">
            <div className="projectVid">
              <img
                src="/buyme.webp"
                alt="forkify App Image"
                className="projectVid"
                loading="lazy"
              />
            </div>
            <div className="projectHeader">
              <h2>BuyMe</h2>
              <div className="projectLinks">
                <a
                  href={"https://github.com/gittushR/buyme"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub></FaGithub>
                </a>
              </div>
            </div>
            <div className="projectabout">
              <p>
                At the Flipkart Grid 5.0 Hackathon, our team built a
                personalized product recommendation system. I led the UI/UX
                design using Flutter, crafting a seamless user experience that
                elevated the app’s overall engagement.
              </p>
            </div>
            <div className="projectTech">
              <div className="techUsed">
                <span className="tech">FlutterSDK</span>
                <span className="tech">Dart</span>
                <span className="tech">Material UI</span>
                <span className="tech">Android 33</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
