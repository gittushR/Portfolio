import React from "react";
import "./CurvedArrowCTA.css";

const CurvedArrowCTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-text">
        <div>
          There's more to me than just code and caffeine. Scroll down or click
          on the seciton to explore the rest of the story.
        </div>
      </div>
      <svg
        className="cta-arrow"
        width="200"
        height="100"
        viewBox="0 0 200 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#f2ecff" />
          </marker>
        </defs>
        <path
          d="M10 120 C 80 30, 160 30, 190 110"
          className="animated-arrow"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
};

export default CurvedArrowCTA;
