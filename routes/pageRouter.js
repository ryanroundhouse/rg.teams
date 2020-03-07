var express = require('express');
var Game = require('../components/game/gameAPI');
var Team = require('../components/team/teamAPI');
var Person = require('../components/person/personAPI');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const games = await Game.getAll();
  const teams = await Team.getAll();
  const people = await Person.getAll();
  res.render('createSchedule', { 
    title: 'Hey', 
    message: 'Hello there!', 
    games: games, 
    teams: teams,
    people: people,
  });
});

router.get('/page/game/:id', async function(req, res, next) {
  const game = await Game.getById(req.params.id);
  const people = await Person.getByTeam(game.team);
  // const peopleCount = people.length;
  // for (var i = 0; i< peopleCount; i++){
  //   var personId = people[i].id;
  //   if (!game.attendance.some((attendee) => {
  //     attendee.person === personId;
  //   })){
  //     const person = await Person.getById(personId);
  //     game.attendance.push({person: personId});
  //   }
  // }
  
  if (game == null){
    res.redirect('/');
  }
  else{
    res.render('gamePage', { game: game, people: people });
  }
});

router.get('/page/person/:id', async function(req, res, next) {
  const person = await Person.getById(req.params.id);
  if (person == null){
    res.redirect('/');
  }
  else{
    res.render('personPage', { person: person });
  }
});

router.get('/page/team/:id', async function(req, res, next) {
  const team = await Team.getById(req.params.id);
  const games = await Game.getByTeam(team.id);
  const people = await Person.getByTeam(team.id);
  if (team == null){
    res.redirect('/');
  }
  else{
    res.render('teamPage', { 
      team: team, 
      games: games,
      people: people,
    });
  }
});

module.exports = router;