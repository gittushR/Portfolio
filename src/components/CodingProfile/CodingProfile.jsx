import React from "react";
import "./codingProfile.css";

const CodingProfile = ({ image, handleName, link, det }) => {
  let listEle = (
    <ul>
      <li>Problems Solved: {det.problemSolved}</li>
      <li>Contest Rating: {det.contestRating}</li>
      <li>Active Since: {det.activeSince}</li>
    </ul>
  );
  if (handleName === "rathitushar021") {
    listEle = (
      <ul>
        <li>Problems Solved: {det.problemSolved}</li>
        <li>Coding Score: {det.score}</li>
        <li>Active Since: {det.activeSince}</li>
      </ul>
    );
  }
  if (handleName === "gittushR") {
    listEle = (
      <ul>
        <li>Public Repos: {det.repos}</li>
        <li>Active Since: {det.activeSince}</li>
      </ul>
    );
  }
  return (
    <div className="channel">
      <a href={link} rel="noopener noreferrer" target="_blank">
        <div className="iconHeader">
          <div className="logo">
            <img src={image}></img>
          </div>
          <div className="handle">{handleName}</div>
        </div>
        <div className="details">{listEle}</div>
      </a>
    </div>
  );
};

export default CodingProfile;
