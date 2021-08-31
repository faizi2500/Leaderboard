// import _ from 'lodash';
import './style.css';
import { showContent } from './showContent.js';

const list =[
  {
    name: 'Faizan',
    score: 98,
  },
  {
    name: 'Amine',
    score: 100,
  },
  {
    name: 'Elyor',
    score: 99,
  },
  {
    name: 'Henry',
    score: 97,
  },
  {
    name: 'Donard',
    score: 96,
  }
];


let scoreBoard = document.getElementById('scoreboard');

const displayContent = (list, show) => {
  show(list);
};

window.onload = () => {
  displayContent(list, showContent);
};
