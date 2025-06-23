import axios from "axios";

export const getLeetcodeDetails = async (username) => {
  const res = await axios.get(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );

  const data = await res.data;

  return data.totalSolved;
};
export const getGFGDetails = async () => {
  const res = await axios.get(
    `https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=rathitushar021`
  );
  if (res.status !== 200) {
    throw new Error("Unable to fetch leetcode profile");
  }
  const data = await res.data;

  return data.totalProblemsSolved;
};
