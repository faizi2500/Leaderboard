import './style.css';
import showContent from './showContent.js';
import getInput from './getInput.js';
import sendScores from './sendScores.js';
import getFromAPI from './getFromAPI.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const urlWithGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Hhwe2n6AjYf5sNhXQS1p/scores/'
const submit = document.getElementById('submit-btn');
const refresh = document.getElementById('refresh-btn');
let list = [];

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const player = await getInput();
  const name = player.playerName;
  const score = player.playerScore;
  await sendScores(name, score, urlWithGame);
});

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const getData = await getFromAPI(urlWithGame);
  const totalPlayers = getData.result;
  list = totalPlayers;
  showContent(list);
});

window.onload = async () => {
  const getData = await getFromAPI(urlWithGame);
  const totalPlayers = getData.result;
  list = totalPlayers;
  showContent(list);
};
