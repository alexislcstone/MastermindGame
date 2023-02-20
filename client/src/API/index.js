import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
let api = {
  getGame: function (obj) {
    return axios.get('/game', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  createNewGame: function (obj) {
    return axios.post('/game', obj)
      .then(data => this.getGame())
      .catch(err => console.log(err))
  },
  // editEntry: function (obj) {
  //   return axios.put('/entries', obj)
  //     .then(data => this.getEntries())
  //     .catch(err => console.log(err))
  // },
  // delEntry: function (obj) {
  //   return axios.delete('/entries?', { params: obj })
  //     .then(data => this.getEntries())
  //     .catch(err => console.log(err))
  // },
}
export default api;