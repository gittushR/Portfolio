import React from "react";
import "./stat.css"

const Stat = ({num,data}) => {
  return (
    <div className="stat">
      <h3 className="data stroke-text">{num}+</h3>
      <p>{data}</p>
    </div>
  );
};

export default Stat;
