//Moduls
const ejs = require('ejs');
const express = require('express');
const pageRoute = require('./routes/pageRoutes');
const app = express();

//Server
const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

//Template Engine
app.set('view engine', 'ejs');
//Middleware
app.use(express.static('public'));

//Routers
app.use('/', pageRoute);
