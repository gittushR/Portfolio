import "./rootLayout.css";
import { Link, Outlet, useLocation } from "react-router";
import { FaBriefcase, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";

const RootLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const bgColor = "var(--background)";
  const fontColor = "var(--text)";
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
        <nav className="navbar desktop-nav">
          <NavLink
            to="/"
            className={currentPath === "/" ? "active nav-item" : "nav-item"}
          >
            <span className="nav-text">HOME</span>
            <FaHome className="nav-icon" />
          </NavLink>
          <NavLink
            to="/projects"
            className={
              currentPath === "/projects" ? "active nav-item" : "nav-item"
            }
          >
            <span className="nav-text">PROJECTS</span>
            <FaProjectDiagram className="nav-icon" />
          </NavLink>
          <NavLink
            to="/work"
            className={currentPath === "/work" ? "active nav-item" : "nav-item"}
          >
            <span className="nav-text">WORK</span>
            <FaBriefcase className="nav-icon" />
          </NavLink>

          <NavLink
            to="/about"
            className={
              currentPath === "/about" ? "active nav-item" : "nav-item"
            }
          >
            <span className="nav-text">ABOUT</span>
            <FaUser className="nav-icon" />
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <nav className="navbar mobile-nav">
        <NavLink to="/" className="nav-item">
          <FaHome className="nav-icon" />
        </NavLink>
        <NavLink to="/projects" className="nav-item">
          <FaProjectDiagram className="nav-icon" />
        </NavLink>
        <NavLink to="/work" className="nav-item">
          <FaBriefcase className="nav-icon" />
        </NavLink>

        <NavLink to="/about" className="nav-item">
          <FaUser className="nav-icon" />
        </NavLink>
      </nav>
    </div>
  );
};

export default RootLayout;
