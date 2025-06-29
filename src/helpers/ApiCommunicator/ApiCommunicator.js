import axios, { AxiosHeaders } from "axios";

export const getLeetcodeDetails = async (username) => {
  let res;
  try {
    res = await axios.get(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    if (res.status !== 200) {
      console.error("Unable to fetch leetcode profile");
      throw new Error("Unable to fetch leetcode profile");
    }
    const data = await res.data;
    return data.totalSolved;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getGFGDetails = async () => {
  try {
    const res = await axios.get(
      `https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=rathitushar021`
    );
    if (res.status !== 200) {
      console.error("Unable to fetch gfg ratings");
      throw new Error("Unable to fetch leetcode profile");
    }
    const data = await res.data;
    return data.totalProblemsSolved;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getLeetcodeRating = async () => {
  let res;
  try {
    res = await axios.get(
      "https://alfa-leetcode-api.onrender.com/tusharrathi/contest"
    );
    if (res.status !== 200) {
      console.error("Unable to fetch leetcode ratings");
      throw new Error("Unable to fetch leetcode ratings");
    }
    const data = await res.data;
    return data.contestRating;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGitRepos = async () => {
  try {
    const res = await axios.get("https://api.github.com/users/gittushR");
    if (res.status !== 200) {
      console.error("Unable to fetch git details");
      throw new Error("Unable to fetch git details");
    }

    const data = await res.data;
    return data.public_repos;
  } catch (error) {
    console.error(error);
    return null;
  }
};

