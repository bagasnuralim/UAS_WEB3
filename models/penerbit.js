const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Penerbit extends Sequelize.Model {}

Penerbit.init({
  namaPenerbit : Sequelize.STRING,
  emailPenerbit : Sequelize.STRING,
  noTelepon : Sequelize.INTEGER
}, { sequelize, modelName: 'penerbit' });


module.exports = Penerbit;