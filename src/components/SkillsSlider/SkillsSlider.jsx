import React from "react";
import "./skillsSlider.css";

const skills = [
  ["C++", "/cpp.png"],
  ["Java", "/java.png"],
  ["Python", "/py.png"],
  ["Javascript", "/js.png"],
  ["Typescript", "/ts.png"],
  ["HTML", "/html.png"],
  ["SQL", "/sql.png"],
  ["ReactJS", "/react.png"],
  ["Express", "/express.png"],
  ["FlutterSDK", "/flutter.png"],
  ["MaterialUI", "/mat.png"],
  ["TailwindCSS", "/tail.png"],
  ["Git", "/git.png"],
  ["Postman", "/post.png"],
  ["Spring Boot", "/springBoot.png"],
  ["Node", "/node.png"],
  ["FastAPI", "/fast.png"],
  ["PostgreSQL", "/postg.png"],
  ["MongoDB", "/mongo.png"],
  ["Firebase", "/fire.png"],
  ["Latex", "/latex.png"],
  ["Oracle Integration Cloud", "/oiccloud.png"],
  ["MS SQL Server Integration Services", "/mssql.svg"],
  ["Docker", "/docker.png"],
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
                  <img src={skill[1]} alt="skill logo" />
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
