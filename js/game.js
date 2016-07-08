var GuessingGame = function() {
  this.reset();
  this.maxGuesses = 5;
};

GuessingGame.prototype.reset = function() {
  this.winningNumber = Math.floor(Math.random() * 100) + 1  ;
  this.guess = null;
  this.guesses = [];
};

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

GuessingGame.prototype.canPlay = function() {
  return (this.guessCount() + 1) < this.maxGuesses;
};

GuessingGame.prototype.hint = function() {
  return [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, this.winningNumber];
};
