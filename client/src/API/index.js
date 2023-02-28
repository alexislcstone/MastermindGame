import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
let api = {
  getNewAnswerSequence: function(obj) {
    return axios.get(`https://www.random.org/integers/?num=4&min=0&max=${obj.level}&col=1&base=10&format=plain&rnd=new`)
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  getUsers: function(obj) {
    return axios.get('/user', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  getSearchedUsers: function(obj) {
    return axios.get('/searchedUsers', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  createNewUser: function (obj) {
    return axios.post('/user', obj)
      .then(data => this.getSearchedUsers(obj))
      .catch(err => console.log(err))
  },
  updateUser: function (obj) {
    console.log('UPDATE USER,', obj)
    return axios.put('/user', obj)
      .then(data => console.log('success'))
      .catch(err => console.log(err))
  },
  getGame: function (obj) {
    return axios.get('/game', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  getCompletedGames: function (obj) {
    return axios.get('/completeGames', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  createNewGame: function (obj) {
    return axios.post('/game', obj)
      .then(data => this.getGame(obj))
      .catch(err => console.log(err))
  },
  updateGame: function (obj) {
    return axios.put('/game', obj)
      .then(data => this.getGame(obj))
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
}
export default api;