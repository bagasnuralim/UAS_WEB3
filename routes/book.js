const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

router.get('/', bookController.getIndexBook);
router.post('/', bookController.postBook);
router.put('/:id', bookController.putBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;