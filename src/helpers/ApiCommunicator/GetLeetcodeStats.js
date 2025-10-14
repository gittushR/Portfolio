// const fetchDetails = async () => {
//   try {
//     const variables = {
//       username: "iamtusharrathi",
//     };
//     const res = await axios.post("https://leetcode.com/graphql/", {
//       query:
//         "query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { contributions { points } profile { reputation ranking } submissionCalendar submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions } } } }",
//       variables: variables,
//     });
//     if (res.status != 200) {
//       throw new Error("Unable to fetch leetcode stats");
//     }
//     const data = await res.data;
//     const parsedData = parseData(
//       data.matchedUser?.userCalendar.submissionCalendar ?? ""
//     );
//     console.log(parsedData);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const parseData = (jsonData) => {
  const parsedData = [];
  for (const [date, count] of Object.entries(jsonData)) {
    parsedData.push({
      date: formatDate(parseInt(date) * 1000),
      count: count,
      level: getLevelFromCount(count, jsonData),
    });
  }

  const currentYear = new Date().getUTCFullYear();
  const prevYearSameDay = new Date().setUTCFullYear(currentYear - 1);

  const startDate = formatDate(prevYearSameDay);
  const endDate = formatDate(Date.now());

  if (parsedData.length === 0 || parsedData[0].date !== startDate) {
    parsedData.unshift({ date: startDate, count: 0, level: 0 });
  }
  if (
    parsedData.length === 0 ||
    parsedData[parsedData.length - 1].date !== endDate
  ) {
    parsedData.push({ date: endDate, count: 0, level: 0 });
  }

  return parsedData;
};
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${year}-${formattedMonth}-${formattedDay}`;
}
function getLevelFromCount(count, jsonData) {
  if (count === 0) return 0;
  const maxCount = Math.max(...Object.values(jsonData));
  return Math.ceil((count / maxCount) * 4);
}
export default parseData;
/*
query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { contributions { points } profile { reputation ranking } submissionCalendar submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions }  } } }
query getUserContestStats($username: String!) { userContestRanking(username: $username) { rating attendedContestsCount globalRanking totalParticipants topPercentage } }
*/
