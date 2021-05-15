const express = require('express');
const router = express.Router();

module.exports = function () {
  //Runa para el home
  router.get('/', (req, res) => {
    res.send('Hola');
  });

  //Ruta para Nosotros
  router.get('/nosotros', (req, res) => {
    res.send('Nosotros')
  })

  return router
}

