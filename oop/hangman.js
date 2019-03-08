const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = ['a', 'c'];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach(letter => {
        puzzle += (this.guessedLetters.includes(letter) || letter === ' ') ? letter : '*';
    });

    return puzzle;
}


const game1 = new Hangman('cata', 2);
const game2 = new Hangman('rat', 1);

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());