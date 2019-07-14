const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Kategori extends Sequelize.Model {}

Kategori.init({
  namaKategori : Sequelize.STRING
}, { sequelize, modelName: 'kategori' });


module.exports = Kategori;

