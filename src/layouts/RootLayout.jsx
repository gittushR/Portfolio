import React from "react";
import "./rootLayout.css";
import { Link, Outlet, useLocation } from "react-router";
import { FaBriefcase, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const RootLayout = () => {
  const location = useLocation();
  const backgroundMap = {
    "/": ["white", "black"],
    "/projects": ["#2b2d42", "#edf2f4"],
    "/about": ["#0D0D0D", "#d3fbd8", "#CADCC8"],
    "/work": ["#bffcfb", "#19647e"],
  };
  const bgColor = backgroundMap[location.pathname][0] || "#000000";
  const fontColor = backgroundMap[location.pathname][1] || "black";
  return (
    <div
      className="rootLayout"
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        transition: "0.4s ease",
      }}
    >
      <header style={{ color: fontColor }}>
        <Link to={"/"} className="logo">
          <span className="navbarLogo" style={{ color: fontColor }}>
            tushar.
            <br />
            rathi
          </span>
        </Link>
        <nav className="navbar">
          <NavLink to="/" className="nav-item">
            <span className="nav-text">HOME</span>
            <FaHome className="nav-icon" />
          </NavLink>
          <NavLink to="/projects" className="nav-item">
            <span className="nav-text">PROJECTS</span>
            <FaProjectDiagram className="nav-icon" />
          </NavLink>
          <NavLink to="/work" className="nav-item">
            <span className="nav-text">WORK</span>
            <FaBriefcase className="nav-icon" />
          </NavLink>

          <NavLink to="/about" className="nav-item">
            <span className="nav-text">ABOUT</span>
            <FaUser className="nav-icon" />
          </NavLink>
        </nav>
        <SocialLinks></SocialLinks>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
