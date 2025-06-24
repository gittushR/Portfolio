import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import "./CompanyWorks.css";
const CompanyWorks = ({ workTitle, listEle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="myWorkContainer">
        <div
          className="myworkheader"
          onClick={() => setIsOpen((prev) => (prev = !prev))}
        >
          <FaDotCircle className="worklistdot"></FaDotCircle> {workTitle}{" "}
          <span className={`open-toggle ${!isOpen ? "pulse" : ""}`}>
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
        {isOpen && <div className="workDone dropdown-content">{listEle}</div>}
      </div>
    </>
  );
};

export default CompanyWorks;
