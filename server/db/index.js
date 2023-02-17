const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/mastermind');


const { Schema } = mongoose;

const userSchema = new Schema({
  userName:String,
  totalScore:Number,
  date: { type: Date, default: Date.now },
});

const Users = mongoose.model('Users', userSchema);

// const gameSchema = new Schema({
//   gameScore: Number,
//   date: { type: Date, default: Date.now },
//   level: {
//         type: String,
//         enum : ['EASY','NORMAL','HARD'],
//         default: 'NORMAL'
//   },
//   userId: Number
// });

// const Games = mongoose.model('Games', gameSchema);

module.exports = {
  Users,
}