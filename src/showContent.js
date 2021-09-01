import './style.css';

const scoreBoard = document.getElementById('scoreboard');

const showContent = (list) => {
  scoreBoard.innerHTML ='';
  list.forEach((each, index) => {
    const eachEntry = document.createElement('div');
    eachEntry.className = 'score-entry';

    const name = document.createElement('p');
    name.className = 'dynamic-name';
    name.textContent = each.user;
    eachEntry.appendChild(name);

    const score = document.createElement('p');
    score.className = 'dynamic-score';
    score.textContent = each.score;
    eachEntry.appendChild(score);

    scoreBoard.appendChild(eachEntry);

    if (index % 2 !== 0) {
      eachEntry.classList.add('background-color');
    }
  });
};

export default showContent;
