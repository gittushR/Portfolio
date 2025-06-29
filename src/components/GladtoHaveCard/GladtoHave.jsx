import { FaArrowRight } from "react-icons/fa";
import "./GladtoHave.css";
import { NavLink } from "react-router";

const GladtoHave = () => {
  return (
    <div className="nonfloatingcard homeCard">
      <div className="centeredLine" style={{ marginBottom: "1rem" }}>
        <span style={{ fontSize: "2rem" }}>👋</span>
        <span style={{ color: "var(--fourthColor)", fontSize: "1.2rem" }}>
          Thanks for visiting my site
        </span>
      </div>
      <span
        style={{
          color: "var(--text)",
          fontSize: "1.6rem",
          fontWeight: "600",
        }}
      >
        Glad to have you here !
      </span>
      <div className="cardActions">
        <ul>
          <li className="centeredLine">
            <a
              href="https://www.linkedin.com/in/tushar-rathi-/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Connect on LinkedIn <FaArrowRight></FaArrowRight>{" "}
            </a>
          </li>
          <li
            className="centeredLine"
            onClick={() => {
              window.location.href = `mailto:tusharrathi2021@outlook.com?subject=Job%20Opportunity&body=Hi%20Tushar,%0A%0A`;
            }}
            style={{ cursor: "pointer" }}
          >
            Email Me <FaArrowRight></FaArrowRight>{" "}
          </li>
          <li className="centeredLine">
            <NavLink to="/about">
              Know more about me<FaArrowRight></FaArrowRight>{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GladtoHave;
