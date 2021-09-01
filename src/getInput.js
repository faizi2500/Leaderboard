import sendScores from "./sendScores";
import createGame from "./createGame";

const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');
const inputForm = document.getElementById('error-parent');

const getInput = async (url) => {
  const result = await createGame(url);
  let gameID = result.result;
  gameID = gameID.substring(14, 34);
  const gameUrl = `${url}${gameID}/scores/`;

  const showError = document.querySelector('.error-style');
  if(userName.value === "" || userScore.value === ""){
    showError.style.display = 'block';
  }
  else {
    let playerName = userName.value;
    let playerScore = userScore.value;
    showError.style.display = 'none'; 
    return {playerName, playerScore, gameUrl};
  }
}
export default getInput