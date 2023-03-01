const userModel = require('../model/userModel.js')

module.exports = {
  getUsers: function (req, res) {
    userModel.getUsers(req.query)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  searchedUsers: function (req, res) {
    userModel.getSearchedUsers(req.query)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  createUser: function (req, res) {
    userModel.createUser(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  updateUser:function (req, res) {
    userModel.updateUser(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
}