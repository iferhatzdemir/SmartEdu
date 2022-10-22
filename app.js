//Moduls
const ejs = require('ejs');
const express = require('express');
const pageRoute = require('./routes/pageRoutes');
const courseRoute = require('./routes/courseRoute');
const mongoose = require('mongoose');
const app = express();

//Server
const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

//DB Connection
mongoose
  .connect('mongodb://localhost:27017/smartedu')
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

//Template Engine
app.set('view engine', 'ejs');
//Middleware
app.use(express.static('public'));

//Routers
app.use('/', pageRoute);
app.use('/courses', courseRoute);
