var Game = require('./gameScheme');
var PersonAPI = require('../person/personAPI');

exports.add = function(date, teamId){
    var newGame = new Game(
        {
            date: date,
            team: teamId,
        }
    );
    // Save the new model instance, passing a callback
    newGame.save(function (err) {
        if (err)
        { 
            return handleError(err);
        }
        console.log("saved Game " + newGame._id)
    });
};

exports.getByID = function(id){
    return Game.findById(id)
        .populate([{path: 'team'}])
        .exec();
};

exports.getAll = function(){
    return Game.find({}).exec();
};

exports.getByTeam = function(teamId){
    return Game.find({team: teamId}).exec();
};

exports.deleteById = function(id){
    const result = Game.deleteOne({_id: id}, function(err, res){
        if (err){
            return handleError(err);
        }
    });
    return result;
};

exports.update = async function(id, people, peopleStatus){
    var gameToUpdate = await exports.getByID(id);
    const playerLength = people.length;
    for (var i = 0; i < playerLength; i++) {
        var personObj = await PersonAPI.getById(people[i]);
        gameToUpdate.attendance.push({
            person: personObj, 
            status: peopleStatus[i],
        });
    }
    gameToUpdate.save();
};