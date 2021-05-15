const express = require('express')

//crear app de express
const app = express();
const port = 3000;

//Runa para el home
app.use('/', (req, res) => {
  res.send('Hola');
})

app.listen(port);