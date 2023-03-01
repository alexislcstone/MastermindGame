const {Games} = require('../db');

module.exports = {
  getGames: function (obj) {
    return Games.find({userId:obj.userId}).sort({ date: -1 });
  },
  getCompleteGames: function (obj) {
    return Games.find({userId:obj.userId,complete:true}).sort({ date: -1 });
  },
  createGame: function (obj) {
    return Games.create(obj);
  },
  //update total score after submission of 10 guesses,status of completion, and time of submission
  updateGame: function (obj) {
    return Games.findOneAndUpdate({ _id: obj.gameId }, obj);
  },
}