
import { makeSoundAndChangeH1ForCat, makeSoundAndChangeH1ForDog, makeSoundAndChangeH1ForHorse } from './utils.js';

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');


horseEl.addEventListener('click', () => {
    makeSoundAndChangeH1ForHorse(); 
});

dogEl.addEventListener('click', () => {
    makeSoundAndChangeH1ForDog();
});

catEl.addEventListener('click', () => {
    makeSoundAndChangeH1ForCat();
});

