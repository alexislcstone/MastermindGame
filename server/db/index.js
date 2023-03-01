const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/mastermind');


const { Schema } = mongoose;

const userSchema = new Schema({
  userName:String,
  totalScore:{type: Number, default: 0},
  date: { type: Date, default: Date.now },
});

const Users = mongoose.model('Users', userSchema);

const gameSchema = new Schema({
  gameScore: {type: Number, default: 0},
  date: { type: Date, default: Date.now },
  level: {
        type: String,
        enum : ['EASY','NORMAL','HARD'],
        default: 'NORMAL'
  },
  complete: {type: Boolean, default: false},
  numOfGuesses:{type: Number, default: 0},
  answerSequence:Array,
  userId: String
});

const Games = mongoose.model('Games', gameSchema);

const guessSchema = new Schema({
  guessesList: Array,
  date: { type: Date, default: Date.now },
  numCorrectPosition: Number,
  numCorrectGuesses:Number,
  gameId: String,
});

const Guesses = mongoose.model('Guesses', guessSchema);
module.exports = {
  Users,Games,Guesses
}