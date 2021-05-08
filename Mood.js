// create schema
const mongoose = require('mongoose');
const {Schema} = mongoose;

// create model
const moodSchema = new Schema({
  emotion: String,
  date: {type: Date, default: Date.now},
  intensity: Number
});


// export model
const Mood = mongoose.model('Mood',moodSchema);
module.exports = Mood;
