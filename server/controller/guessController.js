const guessModel = require('../model/guessModel.js')

module.exports = {
  getGuesses: function (req,res) {
    guessModel.getGuesses(req.query)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  //creates a new guess
  postGuess: function (req, res) {
    guessModel.createGuess(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
}