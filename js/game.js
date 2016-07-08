var GuessingGame = function() {
  this.reset();
  this.maxGuesses = 5;
};

GuessingGame.prototype.reset = function() {
  this.winningNumber = Math.floor(Math.random() * 100) + 1  ;
  this.guess = null;
  this.guesses = [];
  this.hint = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, this.winningNumber].sort(function(x, y) { return x - y }).join(", ");
};

GuessingGame.prototype.getWinningNumber = function() {
  return this.winningNumber;
}

GuessingGame.prototype.setGuess = function(guess) {
  this.guess = parseInt(guess);
};

GuessingGame.prototype.guessCount = function() {
  return this.guesses.length;
};

GuessingGame.prototype.guessesLeft = function() {
  return this.maxGuesses - this.guessCount();
};

GuessingGame.prototype.isDuplicate = function() {
  return this.guesses.includes(this.guess);
};

GuessingGame.prototype.addToGuesses = function() {
  if (!this.isDuplicate()) {
    this.guesses.push(this.guess);
  }
};

GuessingGame.prototype.checkGuess = function() {
  return this.guess === this.winningNumber;
};

GuessingGame.prototype.lowerOrHigher = function() {
  if (this.guess - this.winningNumber < 0) {
    return "higher";
  } else {
    return "lower";
  }
};

GuessingGame.prototype.isWarm = function() {
  return Math.abs(this.guess - this.winningNumber) < 20;
};

GuessingGame.prototype.canPlay = function() {
  return (this.guessCount() + 1) < this.maxGuesses;
};

GuessingGame.prototype.getHint = function() {
  return this.hint;
};
