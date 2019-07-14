const Book = require('../models/book');


module.exports.getIndexBook = (req, res) => {
}
module.exports.postBook = (req, res) => {
    Book.create({
        judulBuku: req.body.judulBuku,
        kategori: req.body.kategori,
        pengarang: req.body.pengarang,
        penerbit: req.body.penerbit,
        tahunTerbit: req.body.tahunTerbit,
        isbn: req.body.isbn,
        hargaJual: req.body.hargaJual,
        stock: req.body.stock,
        rak: req.body.rak
    }).then((book) => {
        res.json(book);
    }).catch((error) => {
        throw error;
    });
}
module.exports.putBook = (req, res) => {
    Book.update({
        judulBuku: req.body.judulBuku,
        kategori: req.body.kategori,
        pengarang: req.body.pengarang,
        penerbit: req.body.penerbit,
        tahunTerbit: req.body.tahunTerbit,
        isbn: req.body.isbn,
        hargaJual: req.body.hargaJual,
        stock: req.body.stock,
        rak: req.body.rak
    },{ where: {
        id : req.params.id
        }
    }).then((book) => {
        res.json(book);
    }).catch((error) => {
        throw error;
    });
}
module.exports.deleteBook = (req, res) => {
    Book.destroy({
        where:{
            id:req.params.id
        }
    }).then((book) => {
        res.json(book);
    }).catch((error) => {
        throw error;
    });
}

