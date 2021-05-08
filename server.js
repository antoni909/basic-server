'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
// express.json() lets you access the req.body
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mood',{useNewUrlParser: true, useUnifiedTopology: true});

const PORT = process.env.PORT || 3001;

const Mood = require('./Mood');

// routes and handlers
app.get('/', (req,res)=>{
  res.send('hello from back end');
});

app.get('/moods',(req,res)=>{
  Mood.find({},(err, dbResponse)=>{
    res.status(200).send(dbResponse);
  });
});

app.post('/moods',(req,res)=>{
  // 0. pass vals to be used to craete new instance using req.body
  console.log('insomnia req:',req);

  // 1. create new instance of Mood
  let newMood = new Mood({
    emotion: req.body.emotion,
    intensity: req.body.intensity
  });
  // 2. save to the database and then...
  newMood.save().then(moodData=> {
  // 3. send the data
    res.send(moodData);
  });
// 4. can check new post to db by going to localhost/moods
});

app.delete('/moods/:id',(req,res)=>{
  let idToDelete = req.params.id;
  Mood.delete({_id: idToDelete},(err,results)=>{
    res.send('id deleted');
  });
});

app.listen(PORT, ()=> console.log(`listening on PORT: ${PORT}`));
