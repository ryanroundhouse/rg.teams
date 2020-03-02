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

exports.deleteById = function(id){
    const result = Game.deleteById(id);
    return result;
};