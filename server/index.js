const express = require("express");
const path = require("path");
const userController = require('./controller/userController.js')
const gameController = require('./controller/gameController.js')
const guessController = require('./controller/guessController.js')

const app = express();
app.use(express.json());

app.get('/searchedUsers', userController.searchedUsers);
app.get('/user',userController.getUsers);
app.post('/user',userController.createUser);
app.put('/user',userController.updateUser);

app.get('/game', gameController.getGames);
app.get('/completeGames',gameController.getCompleteGames);
app.post('/game',gameController.postGame);
app.put('/game',gameController.updateGame);

app.get('/guess', guessController.getGuesses);
app.post('/guess',guessController.postGuess);

app.use(express.static('client/dist'));
app.listen(4000);



