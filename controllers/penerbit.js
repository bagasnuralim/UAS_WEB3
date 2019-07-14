const Penerbit = require('../models/penerbit');

module.exports.postPenerbit = (req, res) => {
    Penerbit.create({
        namaPenerbit : req.body.namaPenerbit,
        emailPenerbit : req.body.emailPenerbit,
        noTelepon : req.body.noTelepon
    }).then((penerbit) => {
        res.json(penerbit);
    }).catch((error) => {
        throw error;
    });
}