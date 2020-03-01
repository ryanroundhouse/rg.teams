var express = require('express');
var Game = require('../components/game/gameAPI');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const games = await Game.getAll();
  res.render('createSchedule', { title: 'Hey', message: 'Hello there!', games: games })
});

router.get('/team', async function(req, res, next) {
  const games = await Game.getAll();
  res.render('teamPage', { games: games });
});

router.get('/team/game/:id', async function(req, res, next) {
  const game = await Game.getById(req.params.id);
  if (game == null)
  {
    res.redirect('/team');
  }
  else
  {
    res.render('gamePage', { game: game });
  }
});

module.exports = router;