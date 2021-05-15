const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//crear app de express
const app = express();
const port = 3000;

// Usar archivos estaticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Habilitar vistas
app.set('views', path.join(__dirname, './views'));

/* Habilitar bodyparses para leer los datos del form */
app.use(bodyParser.urlencoded({ extended: true }));
//Rutas
app.use('/', routes());

app.listen(port);
