const Proyectos = require('../models/Proyectos');
const slug = require('slug');
exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  res.render('index', {
    nombrePagina: `Proyectos`,
    proyectos,
  });
};

exports.formularioProyecto = (req, res) => {
  res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo Proyecto',
  });
};

exports.nuevoProyecto = async (req, res) => {
  /* Enviar a la consola lo que el usuario escriba */
  /* console.log(req.body); */

  /* Validar que haya algo en el input */
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({ texto: 'Agrega un nombre al proyecto' });
  }

  /* Si hay errores */
  if (errores.length > 0) {
    res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo Proyecto',
      errores,
    });
  } else {
    /* No hay errores */
    /* insertar en la DB */
    /* const url = slug(nombre).toLowerCase(); */
    const url = slug(nombre).toLowerCase();
    const proyecto = await Proyectos.create({ nombre, url });
    res.redirect('/');
  }
};

exports.proyectoURL = (req, res) => {
  res.send(req.params.url);
};
