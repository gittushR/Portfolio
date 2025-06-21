import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div class="skills__row">
        <div class="skills__item">
          <img src="/sql.png" alt="" />
          <div class="skills__item-name">SQL</div>
        </div>
        <div class="skills__item">
          <img src="/react.png" alt="" />
          <div class="skills__item-name">REACT</div>
        </div>
        <div class="skills__item ">
          <img src="/express.png" alt="" />
          <div class="skills__item-name">EXPRESS.JS</div>
        </div>
      </div>
      <div class="skills__row">
        <div class="skills__item">
          <img src="/cpp.png" alt="" />
          <div class="skills__item-name">C++</div>
        </div>
        <div class="skills__item">
          <img src="/java.png" alt="" />
          <div class="skills__item-name">JAVA</div>
        </div>
        <div class="skills__item">
          <img src="/js.png" alt="" />
          <div class="skills__item-name">JAVASCRIPT</div>
        </div>

        <div class="skills__item">
          <img src="/python.png" alt="" />
          <div class="skills__item-name">PYTHON</div>
        </div>
      </div>
      <div class="skills__row">
        <div class="skills__item">
          <img src="/springBoot.png" alt="" />
          <div class="skills__item-name">SPRING BOOT</div>
        </div>

        <div class="skills__item">
          <img src="/node.png" alt="" />
          <div class="skills__item-name">NODE.JS</div>
        </div>
        <div class="skills__item ">
          <img src="/mongo.png" alt="" />
          <div class="skills__item-name">MONGODB</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
