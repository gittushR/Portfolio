import { useEffect, useState } from "react";
import "./homepage.css";
import Footer from "../../components/Footer/Footer";
import Stat from "../../components/homePageStat/Stat";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";
import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaLink,
} from "react-icons/fa";
import ContactForm from "../../components/contactForm/ContactForm";
import { Link, useNavigate } from "react-router";

const Homepage = () => {
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
    <>
      <div className="hero" id="top">
        <div className="hero-bg"></div>
        <div className="intro">
          <h1>Hi! I’m</h1>
          <h2 className="stroke-text">Tushar Rathi.</h2>
          <p>
            I code for fun, love problem solving, eating and playing. Currently
            working at{" "}
            <b style={{ color: "red" }}>
              <a
                href="https://www.oracle.com/in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Oracle
              </a>
            </b>{" "}
            as an Associate Software Engineer.
          </p>
          <div className="buttons">
            <button
              className="homebutton view-resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1_V9mEL-UQ3KR8jd2exqDj8o55TpY2YUO/view?usp=drive_link",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              View Resume
            </button>
            <button
              className="homebutton hire-btn"
              onClick={() => {
                window.location.href = `mailto:tushar@example.com?subject=Job%20Opportunity&body=Hi%20Tushar,%0A%0AI%20have%20an%20offer%20for%20you...`;
              }}
            >
              Hire ME
            </button>
          </div>
        </div>
        <img src={"/image3.png"} alt="Tushar Rathi" className="profile-image" />
      </div>
      <div class={`arrow animated bounce ${isScrolled ? "fade" : ""}`}></div>
      <div className="exploreMore">Explore More</div>

      <section className="stats">
        <Stat num={"1"} data="Years of experience"></Stat>
        <Stat num={"10"} data="Successful projects"></Stat>
        <Stat num={"100"} data="Cups of tea"></Stat>
      </section>

      <section className="aboutMe">
        <div className="aboutHeading stroke-text">About Me</div>
        <div className="line">
          <hr />
        </div>
        <Skills></Skills>
        <div className="frame">
          <p className="myPara">
            Hey there! I’m a Software Engineer from{" "}
            <b className="fancy">Kathmandu, Nepal</b> , and a Computer Science
            grad from{" "}
            <b className="fancy" style={{ color: "#f76707" }}>
              {" "}
              NIT Silchar
            </b>
            . I’ve wrangled with APIs at
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
            Java, Python, C++, sarcasm — and I believe good code is like good
            tea: strong, clean, and slightly addictive.
            <br />
            <b>
              {" "}
              Wanna know more? Keep scrolling — I promise it's not all
              semicolons.
            </b>
          </p>
        </div>
      </section>
      <section className="work">
        <div className="workHeading">
          <hr className="line" />
          <div className="workEx">Experience</div>
        </div>
        <Experience></Experience>
        <button
          className="homebutton morebutton"
          style={{
            letterSpacing: "0.8rem",
            width: "50%",
            alignSelf: "center",
            marginTop: "4rem",
          }}
          onClick={() => {
            navigate("/work");
          }}
        >
          Know More <FaExternalLinkAlt></FaExternalLinkAlt>
        </button>
      </section>

      <section className="projects">
        <div className="projectHeader">
          <div className="proj stroke-text">Projects</div>
          <div className="line">
            <hr />
          </div>
        </div>
        <ProjectShowcase></ProjectShowcase>
        <button
          className="homebutton morebutton"
          style={{
            letterSpacing: "0.8rem",
            width: "50%",
            alignSelf: "center",
            margin: "2rem 2rem",
          }}
          onClick={() => {
            navigate("/projects");
          }}
        >
          See More <FaExternalLinkAlt></FaExternalLinkAlt>
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
        <div className="linkssection" style={{ borderLeft: "#fab005 solid" }}>
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
                style={{ color: "black", lineHeight: "1", fontSize: "2rem" }}
              >
                tushar.
                <br />
                rathi
              </span>
            </a>
            <div className="pageLinks">
              <Link to={"/about"}>
                About <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>{" "}
              </Link>
              <Link to={"/work"}>
                Work <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
              </Link>
              <Link to={"/projects"}>
                Projects <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
              </Link>
              <Link>
                Blogs <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
              </Link>
            </div>
          </div>
          <div className="other">
            <button
              className="homebutton submitbutton"
              onClick={() => {
                window.location.href = `mailto:tushar@example.com?subject=Job%20Opportunity&body=Hi%20Tushar,%0A%0AI%20have%20an%20offer%20for%20you...`;
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
    </>
  );
};

export default Homepage;
