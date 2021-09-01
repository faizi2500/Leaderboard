import './style.css';
import showContent from './showContent.js';
import getInput from './getInput.js';
import sendScores from './sendScores.js';
import getFromAPI from './getFromAPI.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
let link;
const submit = document.getElementById('submit-btn');
const refresh = document.getElementById('refresh-btn');
const list = [];

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const player = await getInput(url);
  const name = player.playerName;
  const score = player.playerScore;
  const gameLink = player.gameUrl;
  link = gameLink;
  await sendScores(name, score, gameLink);
});

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const getData = await getFromAPI(link);
  const totalPlayers = getData.result;
  const obj = totalPlayers.pop();
  list.push(obj);
  showContent(list);
});

window.onload = async () => {
  showContent();
};
