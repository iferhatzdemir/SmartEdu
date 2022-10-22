//Moduls

const express = require('express');

const app = express();

//Server
const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

//Middleware
app.use(express.static('public'));

//Routers

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
