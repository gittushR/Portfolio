import { useEffect, useRef, useState } from "react";
import "./homepage.css";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";
import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaLink,
} from "react-icons/fa";
import ContactForm from "../../components/contactForm/ContactForm";
import { Link, useNavigate } from "react-router";
import DrawingBoard from "../../components/DrawingBoard/Drawingboard";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import SpotifyCard from "../../components/SpotifyCard/SpotifyCard";
import GladtoHave from "../../components/GladtoHaveCard/GladtoHave";

const Homepage = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="body">
      <div>
        <DrawingBoard />
      </div>
      <div className="hero" id="top">
        <div className="intro">
          <div className="hi">
            <h1>Hi! I’m</h1>
            <h2 className="stroke-text">Tushar Rathi.</h2>
          </div>
          <div className="headline">
            I love <span style={{ color: "var(--standout)" }}>Algorithms</span>{" "}
            and <span style={{ color: "var(--thirdColor)" }}>Coding</span>
          </div>
          <p>
            Associate Sofware Engineer @Oracle
            {/* <b style={{ color: "red" }}>
              <a
                href="https://www.oracle.com/in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @Oracle
              </a>
            </b> */}
            , CS grad'24 @NIT Silchar
            {/* <b style={{ color: "orangered" }}>
              <a
                href="https://www.nits.ac.in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @NIT Silchar
              </a>
            </b> */}
          </p>

          <div className="aboutComment">
            Full Stack Software Developer, Currently working full time{" "}
            <span style={{ color: "var(--standout)" }}>
              <a
                href="https://www.oracle.com/in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @Oracle
              </a>
            </span>{" "}
            and previously completed an internship{" "}
            <span style={{ color: "var(--standout)" }}>
              <a
                href="https://www.intel.in/content/www/in/en/homepage.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                @Intel
              </a>
            </span>
            . I play video games, houseparties and travel for fun.
          </div>
          <div className="aboutComment2">
            I’ve wrangled with APIs at
            <b className="fancy" style={{ color: "red" }}>
              {" "}
              Oracle
            </b>
            , debugged legacy chaos at{" "}
            <a
              href="https://www.intel.in/content/www/in/en/homepage.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <b className="fancy" style={{ color: "#0068b6" }}>
                Intel
              </b>
            </a>
            , and built everything from sarcastic chatbots to job portals that
            actually work. I speak fluent{"  "}
            C++, Java, Python, sarcasm — and build stuff using MERN stack,
            Spring Boot, ChatGPT (lol). I believe good code is like good tea:
            strong, clean, and slightly addictive.
            <br />
            <br></br>
            <b>
              {" "}
              Wanna know more? Keep scrolling — I promise it's not all
              semicolons.
            </b>
          </div>
          <SocialLinks></SocialLinks>
          <div className="buttons">
            <button
              className="homebutton view-resume"
              onClick={() => {
                window.open("/resume.pdf", "_blank");
              }}
            >
              View Resume
            </button>
            <button
              className="homebutton hire-btn"
              onClick={() => {
                window.location.href = `mailto:tusharrathi2021@outlook.com?subject=Job%20Opportunity&body=Hi%20Tushar,%0A%0AI%20have%20an%20offer%20for%20you...`;
              }}
            >
              Hire ME
            </button>
          </div>
        </div>
        <div className="cards">
          <GladtoHave></GladtoHave>
          <SpotifyCard></SpotifyCard>
        </div>
      </div>
      <div
        onClick={scrollToAbout}
        className={`arrow animated bounce ${isScrolled ? "fade" : ""}`}
      ></div>

      <section className="work" ref={aboutRef}>
        <div className="workHeading">
          <hr className="line" />
          <div className="workEx">Work Experience</div>
        </div>
        <Experience></Experience>
        <button
          className="homebutton morebutton"
          style={{
            width: "50%",
            alignSelf: "center",
            marginTop: "4rem",
          }}
          onClick={() => {
            navigate("/work");
          }}
        >
          See my detailed journey here <FaExternalLinkAlt></FaExternalLinkAlt>
        </button>
      </section>

      <section className="projects">
        <div className="projectHeader">
          <div className="proj">Personal Projects</div>
          <div className="line">
            <hr />
          </div>
        </div>
        <ProjectShowcase></ProjectShowcase>
        <button
          className="homebutton morebutton"
          style={{
            width: "50%",
            alignSelf: "center",
            margin: "2rem 2rem",
          }}
          onClick={() => {
            navigate("/projects");
          }}
        >
          See more completed projects <FaExternalLinkAlt></FaExternalLinkAlt>
        </button>
      </section>
      <div className="footerSection">
        <div className="linkssection">
          <h2 className="links-title">
            Cont
            <span className="links-accent">
              act
              <div className="links-underline"></div>
            </span>
          </h2>
        </div>
        <div
          className="linkssection"
          style={{ borderLeft: "var(--fourthColor) solid" }}
        >
          <h2 className="links-title">
            Li
            <span className="links-accent">
              nks
              <div className="links-underline"></div>
            </span>
          </h2>
        </div>
        <div className="contactDet">
          <ContactForm></ContactForm>
        </div>
        <div className="links">
          <div className="pageLinks-container">
            <a href="#top" className="logo">
              <span
                className="navbarLogo"
                style={{
                  color: "var(--text)",
                  lineHeight: "1",
                  fontSize: "2rem",
                }}
              >
                tushar.
                <br />
                rathi
              </span>
            </a>
            <div className="pageLinks">
              <Link to={"/about"} className="footerLink">
                About <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>{" "}
              </Link>
              <Link to={"/work"} className="footerLink">
                Work <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
              </Link>
              <Link to={"/projects"} className="footerLink">
                Projects <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
              </Link>
              <Link className="footerLink">
                Blogs <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
              </Link>
            </div>
          </div>
          <div className="other">
            <button
              className="homebutton submitbutton"
              onClick={() => {
                window.location.href = `mailto:tusharrathi2021@outlook.com?subject=Job%20Opportunity&body=Hi%20Tushar,%0A%0AI%20have%20an%20offer%20for%20you...`;
              }}
            >
              Email Me
            </button>
            <div className="footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
