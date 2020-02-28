var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController');

/* GET home page. */

router.get('/', gameController.getAll);
router.post('/add', gameController.add);
router.get('/game/:id', gameController.getById);
router.post('/delete/:id', gameController.deleteById);

module.exports = router;