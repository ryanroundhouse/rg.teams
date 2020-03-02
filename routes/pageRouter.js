var express = require('express');
var Game = require('../components/game/gameAPI');
var Team = require('../components/team/teamAPI');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const games = await Game.getAll();
  const teams = await Team.getAll();
  res.render('createSchedule', { 
    title: 'Hey', 
    message: 'Hello there!', 
    games: games, 
    teams: teams 
  });
});

router.get('/page/game/:id', async function(req, res, next) {
  const game = await Game.getById(req.params.id);
  if (game == null)
  {
    res.redirect('/');
  }
  else
  {
    res.render('gamePage', { game: game });
  }
});

module.exports = router;