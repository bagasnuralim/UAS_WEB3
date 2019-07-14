const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
  judulBuku: Sequelize.STRING,
  kategori: Sequelize.STRING,
  pengarang: Sequelize.STRING,
  penerbit: Sequelize.STRING,
  tahunTerbit: Sequelize.INTEGER,
  isbn: Sequelize.STRING,
  hargaJual: Sequelize.INTEGER,
  stock: Sequelize.INTEGER,
  rak: Sequelize.STRING,
}, { sequelize, modelName: 'book' });


module.exports = Book;