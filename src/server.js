const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-bl3z2.mongodb.net/semana09?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(process.env.PORT || 3333);