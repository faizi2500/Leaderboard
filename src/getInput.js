import createGame from './createGame.js';

const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');

/* eslint consistent-return: "error" */
const getInput = async (url) => {
  const result = await createGame(url);
  let gameID = result.result;
  gameID = gameID.substring(14, 34);
  const gameUrl = `${url}${gameID}/scores/`;

  const showError = document.querySelector('.error-style');
  if (userName.value === '' || userScore.value === '') {
    showError.style.display = 'block';
  } else {
    const playerName = userName.value;
    const playerScore = userScore.value;
    showError.style.display = 'none';
    userName.value = '';
    userScore.value = '';
    return { playerName, playerScore, gameUrl };
  }
  return ('Please insert value');
};
export default getInput;