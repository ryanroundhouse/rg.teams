var Person = require('./personDAO');

exports.add = function(name, teamId){
    Person.add(name, teamId);
};

exports.getAll = function(){
    const people = Person.getAll();
    return people;
};

exports.getById = function(id){
    const person = Person.getByID(id);
    return person;
};

exports.getByTeam = function(teamId){
    const people = Person.getByTeam(teamId);
    return people;
};

exports.deleteById = function(id){
    const result = Person.deleteById(id);
    return result;
};