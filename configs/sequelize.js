const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookmarket','root','password',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = sequelize;