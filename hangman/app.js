const game1 = new Hangman('cat', 2);
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

puzzleEl.innerHTML = game1.getPuzzle(); 
guessesEl.innerHTML = game1.getStatusMessage();


console.log(game1.status);


window.addEventListener('keypress', (e) => {
    game1.makeGuess(e.key);
    console.log(game1.getPuzzle());
    game1.getStatusMessage();
    puzzleEl.innerHTML = game1.getPuzzle(); 
    guessesEl.innerHTML = game1.getStatusMessage(); 
    console.log(game1.status);

})