import React from "react";
import "./socialLinks.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SocialLinks = () => {
  return (
    <div
      className="sociallinks"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <a
        href="https://twitter.com/nightttweeter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="twitter"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/iamtush_r/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/tusharrathi173"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/tushar-rathi-/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/gittushR"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
