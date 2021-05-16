const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require('shortid');

const Proyectos = db.define(
  'proyectos',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: Sequelize.STRING,
    url: Sequelize.STRING,
  },
  {
    hooks: {
      beforeCreate(proyect) {
        const url = slug(proyect.nombre).toLowerCase();
        proyect.url = `${url}-${shortid.generate()}`;
      },
    },
  }
);

module.exports = Proyectos;
/* prueba */
