const Kategori = require('../models/kategori');

module.exports.postKategori = (req, res) => {
    Kategori.create({
        namaKategori : req.body.namaKategori
    }).then((kategori) => {
        res.json(kategori);
    }).catch((error) => {
        throw error;
    });
}