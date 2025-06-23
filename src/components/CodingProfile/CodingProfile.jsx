import { useEffect, useState } from "react";
import "./codingProfile.css";
import {
  getGFGDetails,
  getLeetcodeDetails,
} from "../../helpers/ApiCommunicator/ApiCommunicator";

const CodingProfile = ({ image, handleName, link, det }) => {
  let [leetcodeProbs, setLeetcodeProbs] = useState(null);
  let [gfgprobs, setgfgProbs] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let leetcodeStats = getLeetcodeDetails("tusharrathi");
        let gfgStats = getGFGDetails();
        setLeetcodeProbs(leetcodeStats);
        setgfgProbs(gfgStats);
      } catch (error) {
        console.log("Failed to fetch coding problems: " + error);
      }
    })();
  }, []);

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
        <li>Problems Solved: {gfgprobs ? gfgprobs : "Loading..."}</li>
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
  if (handleName === "tusharrathi") {
    listEle = (
      <ul>
        <li>Problems Solved: {leetcodeProbs ? leetcodeProbs : "Loading..."}</li>
        <li>Coding Score: {det.score}</li>
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
