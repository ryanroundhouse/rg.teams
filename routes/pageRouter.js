var express = require('express');
var Game = require('../models/game');
var router = express.Router();

router.get('/', function(req, res, next) {
  Game.find({}, 'date', function(err, games){
    if (err) 
    {
        return handleError(err);
    }
    res.render('createSchedule', { title: 'Hey', message: 'Hello there!', games: games })
  })
});

module.exports = router;