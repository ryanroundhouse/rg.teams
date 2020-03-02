var Team = require('./teamDAO');

exports.add = function(teamName){
    Team.add(teamName);
};

exports.getAll = function(){
    const teams = Team.getAll();
    return teams;
};

exports.getById = function(id){
    const team = Team.getByID(id);
    return team;
};

exports.deleteById = function(id){
    const result = Team.deleteById(id);
    return result;
};