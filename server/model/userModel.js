const {Users,Games} = require('../db');

module.exports = {
  getUsers: function (obj) {
    return Users.find({}).sort({ totalScore: -1 })
  },
  getSearchedUsers:function (obj) {
    return obj.userId?Users.find({ userId: obj.userId }).sort({ userName: 1 }):Users.find({ userName: { '$regex': obj.userName, '$options': 'i' } }).sort({ userName: 1 })
  },
  getAllUsers: function (obj) {
    return Users.find({})
  },
  createUser: function (obj) {
    return Users.create(obj)
  },
  updateUser: function (obj) {
    return Users.findOneAndUpdate({ _id: obj.userId }, obj);
  },
}