var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController');

/* GET home page. */
router.post('/add', gameController.add);

module.exports = router;