const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
  id_user: Sequelize.STRING,
  nama: Sequelize.STRING,
  alamat : Sequelize.STRING,
  no_telepon: Sequelize.INTEGER,
  email: Sequelize.INTEGER,
}, { sequelize, modelName: 'user' });


module.exports = User;