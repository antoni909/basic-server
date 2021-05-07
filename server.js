'use strict';
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send('hello from back end');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`listening on PORT: ${PORT}`));
