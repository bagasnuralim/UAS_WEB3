const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');
const penerbitController = require('../controllers/penerbit');
const kategoriController = require('../controllers/kategori');
const auth = require('../configs/auth');

router.get('/', auth.verifyToken, bookController.getIndexBook);
router.get('/viewsallbook', bookController.getAllBook);
router.post('/createbook', bookController.postBook);
router.put('/:id', bookController.putBook);
router.delete('/:id', bookController.deleteBook);
router.post('/createpenerbit', penerbitController.postPenerbit);
router.post('/createkategori', kategoriController.postKategori);

module.exports = router;