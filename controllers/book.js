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
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=> {
        if(error){
            res.sendStatus(403);
        }else{
            if(authData['roles']=="admin"){
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
                })
            }else{
                res.send('anda harus login terlebih dahulu');
            }
        }
    });       
}
module.exports.putBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
            if(authData['roles']=="admin"){
                Book.update({
                    judulBuku: req.body.judulBuku,
                    kategori: req.body.kategori,
                    pengarang: req.body.pengarang,
                    penerbit: req.body.penerbit,
                    tahunTerbit: req.body.tahunTerbit,
                    isbn: req.body.isbn,
                    hargaJual: req.body.hargaJual,
                    stock: req.body.stock,
                    rak: req.body.rak,
                },{ where: {
                    id : req.params.id
                    }
                }).then((book) => {
                    res.json("data succesfully");
                });
            }else{
                res.sendStatus('403');
            }
        }
    })    
}
module.exports.deleteBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
    if (error) {
        res.sendStatus(403);
    }else{
        if(authData['roles']=="admin"){
            Book.destroy({
                where:{
                    id:req.params.id
                }
            }).then(function (deletedData) {
                if(deletedData === 1){
                    res.status(200).json({message:"Deleted Successfully"});          
                }
                else
                {
                    res.status(404).json({message:"Data Not Found"})
                }
            }).catch(function (error){
                res.status(500).json(error);
            });
        }else{
            res.sendStatus(403);
        }
    }
    })    
}
module.exports.getAllBook = (req, res) => {
    Book.findAll()
    .then((book) => {
        res.json(book)
    });
}
module.exports.getOneBook = (req, res) => {
    Book.findAll({
        where: {
            id : req.params.id
        }
      }).then((book) => {
        res.json(book)
    })
}

