import createGame from './createGame.js';

const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');

const getInput = async () => {
  const showError = document.querySelector('.error-style');
  const added = document.querySelector('.added');
  if (userName.value === '' || userScore.value === '') {
    showError.style.display = 'block';
  } else {
    const playerName = userName.value;
    const playerScore = userScore.value;
    showError.style.display = 'none';
    added.style.display = 'block'
    setTimeout(() => {
      added.style.display = 'none'
    }, 3000)
    // added.style.display = 'block'
    userName.value = '';
    userScore.value = '';
    return { playerName, playerScore };
  }
  return ('Please insert value');
};
export default getInput;