const express = require('express');
const routes = require('./routes');

//crear app de express
const app = express();
const port = 3000;

app.use('/', routes())


app.listen(port);