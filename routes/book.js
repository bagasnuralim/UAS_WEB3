const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');
const penerbitController = require('../controllers/penerbit');
const kategoriController = require('../controllers/kategori');

router.get('/', bookController.getIndexBook);
router.post('/createbook', bookController.postBook);
router.put('/:id', bookController.putBook);
router.delete('/:id', bookController.deleteBook);
router.post('/createpenerbit', penerbitController.postPenerbit);
router.post('/createkategori', kategoriController.postKategori);

module.exports = router;