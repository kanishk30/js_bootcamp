const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach(letter => {
        puzzle += (this.guessedLetters.includes(letter) || letter === ' ') ? letter : '*';
    });

    return puzzle;
}

Hangman.prototype.calculateStatus = function() {
    let finished = true;
    finished = this.word.every(letter => this.guessedLetters.includes(letter) )
    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished'
    } else { 
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function() {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
        return `Better luck next time! Word was ${this.word.join('')}`
    } else {
        return 'You guessed word correctly.'
    }
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    isUnique = !this.guessedLetters.includes(guess);
    isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') { return }

    if (isUnique) {
        this.guessedLetters.push(guess);
    } 

    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }

    this.calculateStatus();
} 
