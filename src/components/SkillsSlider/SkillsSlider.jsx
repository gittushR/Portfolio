import React from "react";
import "./skillsSlider.css";

const skills = [
  [
    ["C++", "/cpp.webp"],
    ["Java", "/java.webp"],
    ["Python", "/py.webp"],
    ["Javascript", "/js.webp"],
    ["Typescript", "/ts.webp"],
    ["SQL", "/sql.webp"],
    ["ReactJS", "/react.webp"],
    ["Express", "/express.webp"],
  ],
  [
    ["MaterialUI", "/mat.webp"],
    ["TailwindCSS", "/tail.webp"],
    ["Git", "/git.webp"],
    ["Postman", "/post.webp"],
    ["Spring Boot", "/springBoot.webp"],
    ["Node", "/node.webp"],
    ["FastAPI", "/fast.webp"],
    ["PostgreSQL", "/postg.webp"],
  ],
  [
    ["MongoDB", "/mongo.webp"],
    ["Firebase", "/fire.webp"],
    ["Latex", "/latex.webp"],
    ["Oracle Integration Cloud", "/oiccloud.webp"],
    ["MS SQL Server Integration Services", "/mssql.svg"],
    ["Docker", "/docker.webp"],
    ["FlutterSDK", "/flutter.webp"],
    ["HTML", "/html.webp"],
  ],
];

const SkillsSlider = () => {
  return (
    <div className="snake-illusion-wrapper">
      {skills.map((skill, i) => (
        <div
          key={i}
          className={`snake-row ${i % 2 === 0 ? "right" : "left"} delay-${i}`}
        >
          <div className="snake-track">
            {[...skill, ...skill].map((s, idx) => (
              <div className="snake-skill" key={`${i}-${idx}`}>
                <img src={s[1]} alt="skill logo" loading="lazy" />
                <div className="skillName">{s[0]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSlider;
