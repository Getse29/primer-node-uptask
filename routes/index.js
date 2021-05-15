const express = require('express');
const router = express.Router();

/* importar controlador */
const proyectosController = require('../controllers/proyectosController')


module.exports = function () {
  //Runa para el home
  router.get('/', proyectosController.proyectosHome);

  //Ruta para Nosotros
  router.get('/nosotros', proyectosController.proyectoNosotros)

  return router
}

