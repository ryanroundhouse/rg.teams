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

router.get('/team', function(req, res, next) {
  Game.find({}, 'date', function(err, games){
    if (err) 
    {
        return handleError(err);
    }
    res.render('teamPage', { games: games })
  })
});

router.get('/team/game/:id', function(req, res, next) {
  Game.findOne({_id: req.params.id}, function(err, game){
    if (err) 
    {
        return handleError(err);
    }
    if (game == null)
    {
      res.redirect('/team');
    }
    else
    {
      res.render('gamePage', { game: game });
    }
  })
});

module.exports = router;