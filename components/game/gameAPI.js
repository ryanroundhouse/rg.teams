var Game = require('./gameDAO');

exports.add = function(date, time, teamId){
    const dateTime = new Date(date + ' ' + time); 
    Game.add(dateTime, teamId);
};

exports.getAll = function(){
    const games = Game.getAll();
    return games;
};

exports.getById = function(id){
    const game = Game.getByID(id);
    return game;
};

exports.getByTeam = function(teamId){
    const games = Game.getByTeam(teamId);
    return games;
};

exports.deleteById = function(id){
    const result = Game.deleteById(id);
    return result;
};

exports.update = function(id, people, peopleStatus){
    const result = Game.update(id, people, peopleStatus);
    return result;
}