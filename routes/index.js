const express = require('express');
const router = express.Router();

/* importar express validator */
const { body } = require('express-validator/check');

/* importar controlador */
const proyectosController = require('../controllers/proyectosController');

module.exports = function () {
  //Runa para el home
  router.get('/', proyectosController.proyectosHome);
  router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
  router.post(
    '/nuevo-proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto
  );

  //Listar proyecto
  router.get('/proyectos/:url', proyectosController.proyectoURL);

  return router;
};
