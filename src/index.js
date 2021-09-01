
import './style.css';
import showContent from './showContent.js';
import getInput from './getInput.js';
import sendScores from "./sendScores";
import getFromAPI from './getFromAPI';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
let link;
const submit = document.getElementById('submit-btn');
const refresh = document.getElementById('refresh-btn');
let list =[];

submit.addEventListener('click', async (e)=> {
  e.preventDefault;
  let name, score, gameLink;
  const player = await getInput(url);
  name = player.playerName;
  score = player.playerScore;
  gameLink = player.gameUrl;
  link = gameLink;
  await sendScores(name, score, gameLink);
})

refresh.addEventListener('click', async  (e)=> {
  e.preventDefault;
  const getData = await getFromAPI(link);
  const totalPlayers =  getData.result
  let obj = totalPlayers.pop();
  list.push(obj);
  showContent(list);

})

window.onload = async () => {
 showContent()
};
