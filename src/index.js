import './style.css';
import showContent from './showContent.js';
import getInput from './getInput.js';
import sendScores from './sendScores.js';
import getFromAPI from './getFromAPI.js';
import createGame from './createGame.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
let newUrlWithGame;
let urlWithGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/K6M7cT3zpdPIl0p6GBmZ/scores/';
let urlList = [urlWithGame];
localStorage.setItem('urlList', JSON.stringify(urlList));
console.log(urlList);
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
  const scoreBoard = document.getElementById('scoreboard');
  scoreBoard.innerHTML = '';
  e.preventDefault();
  const result = await createGame(url);
  let gameID = result.result;
  gameID = gameID.substring(14, 34);
  newUrlWithGame = `${url}${gameID}/scores/`;
  urlList.pop()
  urlList.push(newUrlWithGame);
  // console.log(urlList)
  local(urlList);
  return urlList;
  
  // urlList = JSON.parse(localStorage.getItem('urlList'));
  // list = [];
  // urlWithGame = newUrlWithGame;
});

const local = (urlList) => {
  localStorage.setItem('urlList', JSON.stringify(urlList));
  urlList = JSON.parse(localStorage.getItem('urlList'));
  return urlList;
}

window.onload = async () => {
  console.log(urlList);
  urlList = JSON.parse(localStorage.getItem('urlList'));
  let urlListLength = urlList.length;
  console.log(urlListLength);
  let gameAPI = urlList[0];
  console.log(gameAPI);
  const getData = await getFromAPI(urlWithGame);
  const totalPlayers = getData.result;
  list = totalPlayers;
  showContent(list);
};
