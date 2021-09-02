import './style.css';
import showContent from './showContent.js';
import getInput from './getInput.js';
import sendScores from './sendScores.js';
import getFromAPI from './getFromAPI.js';
import createGame from './createGame.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
let newUrlWithGame;
let urlWithGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/K6M7cT3zpdPIl0p6GBmZ/scores/';
const submit = document.getElementById('submit-btn');
const refresh = document.getElementById('refresh-btn');
const newGame = document.getElementById('new-link');
let list = [];

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const player = await getInput();
  const name = player.playerName;
  const score = player.playerScore;
  // const newGameData = score + name;
  await sendScores(name, score, urlWithGame);
});

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const getData = await getFromAPI(urlWithGame);
  const totalPlayers = getData.result;
  // const newGame = getData.result;
  list = totalPlayers;
  showContent(list);
});

newGame.addEventListener('click', async (e) => {
  e.preventDefault();
  const result = await createGame(url);
  let gameID = result.result;
  gameID = gameID.substring(14, 34);
  newUrlWithGame = `${url}${gameID}/scores/`;
  list = [];
  console.log(newUrlWithGame);
  urlWithGame = newUrlWithGame
  console.log(urlWithGame)
})

window.onload = async () => {
  console.log(newUrlWithGame);
  console.log(urlWithGame);
  const getData = await getFromAPI(urlWithGame);
  const totalPlayers = getData.result;
  list = totalPlayers;
  showContent(list);
};


