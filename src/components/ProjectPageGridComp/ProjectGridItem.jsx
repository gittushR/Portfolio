import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectGridItem = ({
  projectName,
  videoLink,
  gitLink,
  aboutProj,
  techUsed,
  playlink = null,
}) => {
  let playButton;
  if (playlink != null) {
    playButton = (
      <span
        style={{
          fontSize: "1.4rem",
          backgroundColor: "#f1f1e6",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          border: "none",
          borderRadius: "0.8rem",
          letterSpacing: "0.1rem",
          fontWeight: "800",
        }}
      >
        <a href={playlink}>
          {projectName === "Foodcourt" ? (
            <FaExternalLinkAlt></FaExternalLinkAlt>
          ) : (
            "PLAY"
          )}
        </a>
      </span>
    );
  }
  return (
    <div className="gridItem">
      <div className="projectVid">
        <video
          src={videoLink}
          autoPlay
          loop
          muted
          playsInline
          className="project-video"
        />
      </div>
      <div className="projectHeader">
        <h2>{projectName}</h2>
        <div className="projectLinks">
          {playlink && playButton}
          <a href={gitLink} className="git-link">
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
      <div className="projectabout">
        <p>{aboutProj}</p>
      </div>
      <div className="projectTech">
        <div className="techUsed">
          {techUsed.map((tech, ind) => (
            <span className="tech" key={ind}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGridItem;
