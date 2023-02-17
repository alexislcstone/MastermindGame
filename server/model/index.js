const {Users,Games} = require('../db');

module.exports = {
  getUser: function (obj) {
    return Users.find({ userId: obj.userId })
  },
  getAllUsers: function (obj) {
    return Users.find({})
  },
  create: function (obj) {
    return Users.create(obj)
  },
  // edit: function (obj) {
  //   return Entry.findOneAndUpdate({ _id: obj._id }, obj)
  // },
  // del: function (id) {
  //   return Entry.deleteOne({ _id: id })
  // },
  // deleteAllSelectedEntries: function (ids) {
  //   console.log('hit deleteSelected, ', ids)
  //   return Entry.deleteMany({ _id: { $in: ids } })
  // },
  // deleteAllEntriesInANotebook: function (obj) {
  //   return Entry.deleteMany({ notebookId: obj.notebookId })
  // },
  // deleteAllEntries: function () {
  //   return Entry.deleteMany({})
  // },
  // getAllNotebooks: function () {
  //   return Notebook.find({}).sort({ starred: -1, date: -1 })
  // },
  // createNotebook: function (obj) {
  //   return Notebook.create(obj)
  // },
  // editNotebook: function (obj) {
  //   console.log('EditNotebook: ', obj)
  //   return Notebook.findOneAndUpdate({ _id: obj._id }, obj)
  // },
  // delNotebook: function (id) {
  //   return Notebook.deleteOne({ _id: id })
  // },
}