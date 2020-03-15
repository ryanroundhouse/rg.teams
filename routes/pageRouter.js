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
  if (game == null){
    res.redirect('/');
    return;
  }
  const people = await Person.getByTeam(game.team);

  var attendance = game.attendance;
  const peopleCount = people.length;
  for (var i = 0; i< peopleCount; i++){
    var personId = people[i].id;
    if (!attendance.some((attendee) => {
      return attendee.person.id == personId;
    })){
      const person = await Person.getById(personId);
      attendance.push({person: person, status: ''});
    }
  }
  
  res.render('gamePage', { game: game, attendees: attendance });
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