

const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const h1El = document.getElementById('animal-name');

export function makeSoundAndChangeH1ForHorse() {
    horseSound.play();
    h1El.textContent = 'It\'s hard to lead a cavalry charge if you think you look funny on a horse';
}  
export function makeSoundAndChangeH1ForDog() {
    dogSound.play();
    h1El.textContent = 'Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read';
}

export function makeSoundAndChangeH1ForCat() {
    catSound.play();
    h1El.textContent = 'Cats have it all – admiration, endless sleep, and company only when they want it';
}
