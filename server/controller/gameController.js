const gameModel = require('../model/gameModel.js')

module.exports = {
  getGames: function (req,res) {
    gameModel.getGames(req.query)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  getCompleteGames: function (req,res) {
    gameModel.getCompleteGames(req.query)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },

  //creates a new game
  postGame: function (req, res) {
    gameModel.createGame(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  //edits the gameScore and the complete status and maybe update time to time completed?
  updateGame: function (req, res) {
    gameModel.updateGame(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
}