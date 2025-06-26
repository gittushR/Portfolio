import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div class="skills__row">
        <div class="skills__item">
          <img loading="lazy" src="/sql.webp" alt="" />
          <div class="skills__item-name">SQL</div>
        </div>
        <div class="skills__item">
          <img loading="lazy" src="/react.webp" alt="" />
          <div class="skills__item-name">REACT</div>
        </div>
        <div class="skills__item ">
          <img loading="lazy" src="/express.webp" alt="" />
          <div class="skills__item-name">EXPRESS.JS</div>
        </div>
      </div>
      <div class="skills__row">
        <div class="skills__item">
          <img loading="lazy" src="/cpp.webp" alt="" />
          <div class="skills__item-name">C++</div>
        </div>
        <div class="skills__item">
          <img loading="lazy" src="/java.webp" alt="" />
          <div class="skills__item-name">JAVA</div>
        </div>
        <div class="skills__item">
          <img loading="lazy" src="/js.webp" alt="" />
          <div class="skills__item-name">JAVASCRIPT</div>
        </div>

        <div class="skills__item">
          <img loading="lazy" src="/py.webp" alt="" />
          <div class="skills__item-name">PYTHON</div>
        </div>
      </div>
      <div class="skills__row">
        <div class="skills__item">
          <img loading="lazy" src="/springBoot.webp" alt="" />
          <div class="skills__item-name">SPRING BOOT</div>
        </div>

        <div class="skills__item">
          <img loading="lazy" src="/node.webp" alt="" />
          <div class="skills__item-name">NODE.JS</div>
        </div>
        <div class="skills__item ">
          <img loading="lazy" src="/mongo.webp" alt="" />
          <div class="skills__item-name">MONGODB</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
