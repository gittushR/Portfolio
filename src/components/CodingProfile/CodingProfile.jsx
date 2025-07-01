import { useEffect, useState } from "react";
import "./codingProfile.css";
import {
  getGFGDetails,
  getGitRepos,
  getLeetcodeRating,
} from "../../helpers/ApiCommunicator/ApiCommunicator";
const CodingProfile = ({
  image,
  handleName,
  link,
  det,
  leetcodeProblems = null,
}) => {
  let [gfgprobs, setgfgProbs] = useState(null);
  let [leetcodeRating, setLeetcodeRating] = useState(null);
  let [gitRepos, setGitRepos] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let gfgStats = getGFGDetails().then((value) => {
          if (value == null) {
            return 29;
          }
          return value;
        });
        setgfgProbs(gfgStats);
      } catch (error) {
        console.log("Failed to fetch gfg coding problems: " + error);
      }
    })();
    (async () => {
      try {
        let lcrating = getLeetcodeRating().then((value) => {
          if (value == null) {
            return 1591;
          }
          const roundedValue = Math.round(value);
          return roundedValue;
        });
        setLeetcodeRating(lcrating);
      } catch (error) {
        setLeetcodeRating(det.contestRating);
        console.log("Failed to fetch lc rating: " + error);
      }
    })();
    (async () => {
      try {
        let gitRepoCount = getGitRepos();
        setGitRepos(gitRepoCount);
      } catch (error) {
        console.log("Failed to fetch git profile: " + error);
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
        <li>Public Repos: {gitRepos ? gitRepos : "Loading..."}</li>
        <li>Active Since: {det.activeSince}</li>
      </ul>
    );
  }
  if (handleName === "tusharrathi") {
    listEle = (
      <ul>
        <li>Problems Solved: {leetcodeProblems}</li>
        <li>
          Contest Rating: {leetcodeRating ? leetcodeRating : "Loading..."}
        </li>
        <li>Active Since: {det.activeSince}</li>
      </ul>
    );
  }
  return (
    <div className="channel">
      <a href={link} rel="noopener noreferrer" target="_blank">
        <div className="iconHeader">
          <div className="logo">
            <img src={image} loading="lazy"></img>
          </div>
          <div className="handle">{handleName}</div>
        </div>
        <div className="details">{listEle}</div>
      </a>
    </div>
  );
};

export default CodingProfile;
