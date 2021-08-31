import './style.css';

let scoreBoard = document.getElementById('scoreboard');

export const showContent = (list) => {
  list.forEach((each, index) => {
    console.log(index);
    const eachEntry =  document.createElement('div');
    eachEntry.className = 'score-entry';
    const name = document.createElement('p');
    name.className = 'dynamic-name';
    name.textContent = `${each.name}`;
    console.log(name)
    eachEntry.appendChild(name);

    const score = document.createElement('p');
    score.className = 'dynamic-score';
    score.textContent = each.score;
    eachEntry.appendChild(score);

    scoreBoard.appendChild(eachEntry);

    if(index % 2 !== 0) {
      eachEntry.classList.add('background-color')
    }
  });
};
