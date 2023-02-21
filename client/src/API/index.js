import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
let api = {
  getNewAnswerSequence: function(obj) {
    return axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new')
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },

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
  updateGame: function (obj) {
    return axios.put('/game', obj)
      .then(data => this.getGame())
      .catch(err => console.log(err))
  },

  //gets list of guesses based on the currGame id
  getGuesses: function(obj) {
    return axios.get('/guess?', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  createGuess: function (obj) {
    return axios.post('/guess', obj)
      .then(data => this.getGuesses({gameId:obj.gameId}))
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