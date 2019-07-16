const Book = require('../models/book');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


module.exports.getIndexBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=> {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                message :"OK",
                authData : authData
            })
        }
    })
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
module.exports.getAllBook = (req, res) => {
    Book.findAll()
    .then((book) => {
        res.json(book)
    });
}
module.exports.get = (req, res) => {
    
}

