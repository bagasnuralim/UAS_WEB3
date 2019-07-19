const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');
const penerbitController = require('../controllers/penerbit');
const kategoriController = require('../controllers/kategori');
const auth = require('../configs/auth');

router.get('/', auth.verifyToken, bookController.getIndexBook);
router.get('/viewsallbook', bookController.getAllBook);
router.post('/createbook', auth.verifyToken, bookController.postBook);
router.put('/:id', auth.verifyToken, bookController.putBook);
router.delete('/:id', auth.verifyToken, bookController.deleteBook);

router.get('/view/:id', bookController.getOneBook);
router.post('/createpenerbit', penerbitController.postPenerbit);
router.post('/createkategori', kategoriController.postKategori);

module.exports = router;