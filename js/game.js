var GuessingGame = function() {
  this.reset();
};

GuessingGame.prototype.reset = function() {
  this.winningNumber = Math.floor(Math.random() * 100) + 1;
  this.guess = null;
  this.guesses = [];
  this.maxGuesses = 5;
  this.hint = this.createHint();
};

GuessingGame.prototype.getWinningNumber = function() {
  return this.winningNumber;
};

GuessingGame.prototype.setGuess = function(guess) {
  this.guess = parseInt(guess);
};

GuessingGame.prototype.getGuess = function() {
  return this.guess;
};

GuessingGame.prototype.addToGuesses = function() {
    this.guesses.push(this.guess);
};

GuessingGame.prototype.removeGuessFromGuesses = function() {
  return this.getGuessesArray().splice(-1);
};

GuessingGame.prototype.guessCount = function() {
  return this.guesses.length;
};

GuessingGame.prototype.getGuessesArray = function() {
  return this.guesses;
};

GuessingGame.prototype.getGuessList = function() {
  return this.guesses.join(", ");
};

GuessingGame.prototype.guessesLeft = function() {
  return this.maxGuesses - this.guessCount();
};

GuessingGame.prototype.isLastGuess = function() {
  return this.getGuessesArray().length === this.maxGuesses;
};

GuessingGame.prototype.checkGuess = function() {
  return this.guess === this.winningNumber;
};

GuessingGame.prototype.guessIsWarm = function() {
  return Math.abs(this.guess - this.winningNumber) < 20;
};

GuessingGame.prototype.lowerOrHigher = function() {
  if (this.guess - this.winningNumber < 0) {
    return "higher";
  } else {
    return "lower";
  }
};

GuessingGame.prototype.createHint = function() {
  var arr = [this.getWinningNumber()];

  for (var i = 0; i < 9; i++) {
    var randomNum = Math.floor(Math.random() * 100) + 1;

    if (arr.indexOf(randomNum) !== -1) {
      randomNum = Math.floor(Math.random() * 100) + 1;
    } else {
      arr.push(randomNum);
    }
  }

  return arr.sort(function(x, y) { return x - y; }).join(", ");
};

GuessingGame.prototype.getHint = function() {
  return this.hint;
};
