import pixApi from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = document.querySelector('input[data-search]');
const loader = document.querySelector('.loader-div');
const list = document.querySelector('.list');