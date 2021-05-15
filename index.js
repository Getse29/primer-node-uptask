const express = require('express');
const routes = require('./routes');
const path = require('path');

//crear app de express
const app = express();
const port = 3000;

// Habilitar pug
app.set('view engine', 'pug');

// Habilitar vistas
app.set('views', path.join(__dirname, './views'));

//Rutas
app.use('/', routes());

app.listen(port);
