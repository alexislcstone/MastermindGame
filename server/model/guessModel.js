const {Guesses} = require('../db');

module.exports = {
  //gets a list of the current game's guesses (should be under 10)
  getGuesses: function (obj) {
    return Guesses.find({gameId:obj.gameId}).sort({ date: -1 });
  },
  //create a guess and links it to the current game using gameID
  createGuess: function (obj) {
    return Guesses.create(obj)
  },
}