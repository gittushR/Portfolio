import React from "react";
import "./skillsSlider.css";

const skills = [
  ["C++", "/cpp.webp"],
  ["Java", "/java.webp"],
  ["Python", "/py.webp"],
  ["Javascript", "/js.webp"],
  ["Typescript", "/ts.webp"],
  ["HTML", "/html.webp"],
  ["SQL", "/sql.webp"],
  ["ReactJS", "/react.webp"],
  ["Express", "/express.webp"],
  ["FlutterSDK", "/flutter.webp"],
  ["MaterialUI", "/mat.webp"],
  ["TailwindCSS", "/tail.webp"],
  ["Git", "/git.webp"],
  ["Postman", "/post.webp"],
  ["Spring Boot", "/springBoot.webp"],
  ["Node", "/node.webp"],
  ["FastAPI", "/fast.webp"],
  ["PostgreSQL", "/postg.webp"],
  ["MongoDB", "/mongo.webp"],
  ["Firebase", "/fire.webp"],
  ["Latex", "/latex.webp"],
  ["Oracle Integration Cloud", "/oiccloud.webp"],
  ["MS SQL Server Integration Services", "/mssql.svg"],
  ["Docker", "/docker.webp"],
];

const SkillsSlider = () => {
  return (
    <div className="snake-illusion-wrapper">
      {[0, 1, 2].map((row, i) => (
        <div
          key={i}
          className={`snake-row ${i % 2 === 0 ? "right" : "left"} delay-${i}`}
        >
          <div className="snake-track">
            {[...skills, ...skills]
              .sort(() => Math.random() - 0.5)
              .map((skill, idx) => (
                <div className="snake-skill" key={`${i}-${idx}`}>
                  <img src={skill[1]} alt="skill logo" loading="lazy" />
                  <div className="skillName">{skill[0]}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSlider;
