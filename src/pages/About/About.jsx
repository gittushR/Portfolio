import "./about.css";
import LeetCodeCalendar from "leetcode-calendar";
import CodingProfile from "../../components/CodingProfile/CodingProfile";
import SkillsSlider from "../../components/SkillsSlider/SkillsSlider";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import PhotoCarousel from "../../components/CollegeGallery/PhotoCarousel";
import CurvedArrowCTA from "../../components/CurvedArrow/CurvedArrowCTA";

import {
  getGFGDetails,
  getLeetcodeDetails,
} from "../../helpers/ApiCommunicator/ApiCommunicator";
import FootballAnimation from "../../components/FootballAnimation/FootballAnimation";

let leetcodeStats = await getLeetcodeDetails("tusharrathi");
let gfgStats = await getGFGDetails();

let codingStats = {
  leetcode: {
    problemSolved: leetcodeStats.totalSolved,
    contestRating: 1567,
    activeSince: "June 2022",
  },
  codeforces: {
    problemSolved: 911,
    contestRating: 1600,
    activeSince: "May 2021",
  },
  GFG: {
    problemSolved: gfgStats.totalProblemsSolved,
    score: 2100,
    activeSince: "August 2022",
  },
  github: {
    repos: 28,
    activeSince: "August 2021",
  },
};
let myCertificates = [
  {
    name: "Oracle Cloud Infrastructure 2024 Certified Application Integration Professional",
    logo: "/oic.png",
    desc: `Certified in designing and implementing integrations using Oracle Integration Cloud (OIC), with hands-on experience building middleware layers and translating end-to-end application requirements into scalable, workflow-based solutions.`,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=660DEA8D67B2E70E130427C9D5024CD88EE27AB3078DC82572063D713D3E7948",
    class: "Oracle-cert",
  },
  {
    name: "Oracle Redwood Application 2024 Certified Developer Associate",
    logo: "/vbcs.png",
    desc: `Certified in designing and developing user experiences using the Redwood Design System (RDS) and Oracle Visual Builder Studio, with validated expertise in crafting modern applications on the Redwood platform.`,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EBE1564ABAEA9A44E67D6FFD28FD89C27CF185D036F1DA68C639CFA26141CC83",
    class: "Oracle-cert",
  },
  {
    name: "Intel -  Recognized for Fearless Innovation (April 2024)",
    logo: "/intel-96.png",
    desc: `Awarded by leadership for successfully delivering a key result in R1 by optimizing internal systems, enabling data integration layers, and driving end-to-end automation—significantly contributing to tech debt reduction.`,
    link: "https://drive.google.com/file/d/1iqs87LcvD9WgVbrptw81xgO7MNzRZ78B/view?usp=sharing",
    class: "intel-cert",
  },
  {
    name: "IIT Bombay -  Java Training Certificate",
    logo: "/IITB.png",
    desc: `Completed Java training and certification under the Spoken Tutorial Project by IIT Bombay, organized at NIT Silchar, with a proctored online exam validating core Java programming skills.`,
    link: "https://drive.google.com/file/d/1H30SL4wGFZXtQul-BrgPB1lzKmmB4wbe/view?usp=drive_link",
    class: "IITB",
  },
];
const About = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setIsScrolled(scrollY >= 1);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const importantDates = [
    { date: "Aug 2024", event: "First full-time job at Oracle" },
    { date: "May 2024", event: "Graduated with a CS Degree" },
    { date: "Jan 2024", event: "First job at INTEL, an Internship" },
  ];

  const hobbies = [
    { icon: "🎮", name: "Video Games" },
    { icon: "🎬", name: "Comedy Movies" },
    { icon: "🍳", name: "Cooking" },
    { icon: "⚽🏏", name: `Football/Cricket` },

    { icon: "🛫", name: `Travelling` },
  ];
  const exampleTheme = {
    light: [
      "rgb(29, 10, 10)",
      "rgba(192, 132, 245, 0.44)",
      "rgba(192, 132, 245, 0.6)",
      "rgba(192, 132, 245, 0.76)",
      "rgba(192, 132, 245, 0.92)",
    ],
    dark: ["#d3f9d8", "#8ce99a", "#51cf66", "#37b24d", "#2b8a3e"],
  };
  return (
    <>
      <div className="aboutMePage">
        <div className="aboutMeContainer">
          <div className="aboutMyselfBox">
            <div className="myImage">
              <img src="/profile2.png" alt="my photo" />
            </div>
            <div className="myselfbox1">
              <div className="div1">Hey there, I AM</div>
              <div className="div2">TUSHAR RATHI</div>
            </div>
            <div className="myselfbox2">
              <div className="quote-card">
                <span className="quote-mark">”</span>
                <p className="quote-text">
                  A 2024 CS grad with a thing for tech, clean code, and solving
                  real problems with creativity. Dual-certified in Oracle Cloud,
                  ex-Intel intern, and a Codeforces Expert with 800+ LeetCode
                  problems under the belt with development skills across the
                  board.
                </p>
              </div>
            </div>
            <div className="gotoLinks">
              <div className="boxContainer">
                <div className="div0">
                  <CurvedArrowCTA></CurvedArrowCTA>
                </div>
                <div className="div1">
                  <div className="quickLinks">
                    <h2>
                      Find My<FaExternalLinkAlt></FaExternalLinkAlt>
                    </h2>
                    <div className="pageSections">
                      <div className="codingSection">
                        <a
                          href="#codingProfiles"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <FaLink></FaLink>Coding Profiles
                        </a>
                      </div>

                      <div className="certificatesSection">
                        <a
                          href="#certificationsSection"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <FaLink></FaLink>Certificates
                        </a>
                      </div>
                      <div className="resume">
                        <a
                          href="https://drive.google.com/file/d/1_V9mEL-UQ3KR8jd2exqDj8o55TpY2YUO/view?usp=drive_link"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink></FaLink>Resume
                        </a>
                      </div>
                      <div className="educationSection">
                        <a
                          href="#education"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <FaLink></FaLink>
                          College
                        </a>
                      </div>
                      <div className="techskillSection">
                        <a
                          href="#skills"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <FaLink></FaLink>Technical Skills
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-card hobbies-card">
          <h3>🎯 Hobbies & Interests</h3>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.name}
                className="hobby-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="hobby-icon">{hobby.icon}</span>
                <span className="hobby-name">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="floating-card timeline-card">
          <h3>📅 Important Dates</h3>
          <div className="timeline">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <span className="timeline-event">{item.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div
          className={`arrow animated bounce ${isScrolled ? "fade" : ""}`}
          style={{
            zIndex: 2,
            backgroundImage:
              "url(https://www.citypng.com/public/uploads/preview/white-double-arrow-to-down-icon-hd-png-7017516950328142dcfgauvah.png)",
            height: "4rem",
            width: "4rem",
          }}
        ></div> */}
      </div>

      <div className="codingProfiles" id="codingProfiles">
        <div className="codingContainer">
          <h1>CODING PROFILES</h1>
          <div className="leetcodeCalendar">
            <a
              href="https://leetcode.com/u/tusharrathi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LeetCodeCalendar
                username="tusharrathi"
                blockSize={12}
                blockMargin={14}
                fontSize={16}
                theme={exampleTheme}
                style={{ maxWidth: "160rem" }}
              />
            </a>
          </div>
          <div className="codingHandles">
            <CodingProfile
              image="/leetcode-48.png"
              handleName="tusharrathi"
              link="https://leetcode.com/u/tusharrathi/"
              det={codingStats.leetcode}
            ></CodingProfile>
            <CodingProfile
              image="/codeforces-48.png"
              handleName="Whizz_Kid"
              link="https://codeforces.com/profile/Whizz_Kid"
              det={codingStats.codeforces}
            ></CodingProfile>
            <CodingProfile
              image="/gfg-48.png"
              handleName="rathitushar021"
              link="https://www.geeksforgeeks.org/user/rathitushar021/"
              det={codingStats.GFG}
            ></CodingProfile>
            <CodingProfile
              image="/git-48.png"
              handleName="gittushR"
              link="https://github.com/gittushR"
              det={codingStats.github}
            ></CodingProfile>
          </div>
        </div>
      </div>
      <div className="certificationsSection" id="certificationsSection">
        <div className="certificationContainer">
          <h1>CERTIFICATIONS & AWARDS</h1>
          <div className="certificates">
            {myCertificates.map((certificate, ind) => (
              <div className="certificate" key={ind}>
                <div className="certificatePic">
                  {" "}
                  <img
                    src={certificate.logo}
                    alt="certificateLogo"
                    className={certificate.class}
                  />
                </div>
                <div className="certificateDesc">
                  <div className="certHeading">
                    <a
                      href={certificate.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h3>{certificate.name}</h3>
                    </a>
                  </div>
                  <div className="certDesc">{certificate.desc}</div>
                  <div className="viewCert">
                    <a
                      href={certificate.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View Credentials
                    </a>{" "}
                    <FaLink></FaLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="education" id="education">
        <div className="educationContainer">
          <h1>COLLEGE</h1>
          <div className="college">
            <div className="collegeLogo">
              <img src="/nits.png" alt="College Logo" />
            </div>
            <div className="collegeDesc">
              <div className="collegeHeader">
                <a
                  href="https://www.nits.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <h2>
                    NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR <FaLink></FaLink>,
                    {"  "}
                    <span style={{ fontSize: "2rem" }}>
                      Nov 2020 - May 2024
                    </span>
                  </h2>
                </a>
              </div>
              <h3>Silchar, Assam, India</h3>
              <ul>
                <li>
                  <b>Bachelor's Degree in Computer Science</b>, Graduated with a
                  Cummulative grade point average of <b>8.78</b>
                </li>
                <li>
                  <b>100% SCHOLARSHIP from Government of India.</b> Yeah, that
                  was pretty cool !!
                </li>
                <li>
                  Did a couple of research internships, research projects, was a
                  member of the Placement Cell, Led the Computer Science Society
                  as the Executive Head, enjoyed fests every 2 months, made
                  friends across departments and had a
                  <b> lot, lot, lot of fun</b>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1m5ZwWIMmlfJuGPLaLqXw5n23YxviyfYJ/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    See Offer letter <FaExternalLinkAlt></FaExternalLinkAlt>
                  </a>
                  ,{" "}
                  <a
                    href="https://drive.google.com/file/d/1nQ_KMLlvJv8IH0hBXUf-BZESqgliC-j-/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Degree Certificate <FaExternalLinkAlt></FaExternalLinkAlt>,
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1mr8-z_Eo9_xXQluNo4FwUXqaQvpDVHbW/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Grade-sheets <FaExternalLinkAlt></FaExternalLinkAlt>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="css-society">
            <div className="cssHeader">
              <div className="cssLogo">
                <img src="/css.png" alt="css Logo" />
              </div>
              <h3>THE COMPUTER SCIENCE SOCIETY, NITS</h3>
            </div>
            <p>
              The most active departmental club at my time, organized seminars,
              fun events, hackathons and technical competiotions. Ran the club
              with all my heart. Striver's event being the highlight of the
              time.
            </p>
          </div>
          <div className="css-society">
            <div className="cssHeader">
              <div className="cssLogo">
                <img
                  src="/nits.png"
                  alt="NIT Logo"
                  style={{ height: "4rem", width: "4rem" }}
                />
              </div>
              <h3>TRAINING & PLACEMENT CELL, NITS</h3>
            </div>
            <p>
              Dedicated a lot of time to this. Learnt some things that are
              really handy now. Saw pretty early how companies hire, conducted
              interviews, contacted HRs, but later did end up hurting myself
              though.
            </p>
          </div>
          <PhotoCarousel></PhotoCarousel>
        </div>
      </div>
      <div className="skillsSection" id="skills">
        <div className="skillsContainer">
          <h1>TECHNICAL SKILLS</h1>
          <div className="skillslide">
            <SkillsSlider></SkillsSlider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
