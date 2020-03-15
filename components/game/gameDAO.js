var Game = require('./gameScheme');
var PersonAPI = require('../person/personAPI');
var Person = require('../person/personAPI');
var Attendee = require('./attendanceScheme').Attendee;

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
    const game = Game.findById(id)
        .populate({path: 'team'})
        .populate("attendance.person")
        .exec();
        return game;
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
    var attendance = gameToUpdate.attendance;
    if (typeof people === 'string' || people instanceof String){
        if (!attendance.some((attendee) => {
            return people == attendee.person.id;
        })){
            const person = await Person.getById(people);
            const attendee = new Attendee({
                person: person, 
                status: peopleStatus,
            });
            attendance.push(attendee);
        }
    }
    else{
        const playerLength = people.length;
        for (var i = 0; i < playerLength; i++) {
            if (!attendance.some((attendee) => {
                return people[i] == attendee.person.id;
            })){
                try{
                    const person = await Person.getById(people[i]);
                    const attendee = new Attendee({
                        person: person, 
                        status: peopleStatus[i],
                    });
                    attendance.push(attendee);
                }
                catch (exception){
                    console.log(exception);
                    throw exception;
                }
            }
            else{
                for (var at = 0; at < attendance.length; at++){
                    if (attendance[at].person.id === people[i]){
                        const person = await Person.getById(people[i]);
                        const attendee = new Attendee({
                            person: person, 
                            status: peopleStatus[i],
                        });
                        attendance[at] = attendee;
                    }
                }
            }
        }
    }
    gameToUpdate.attendance = attendance;
    gameToUpdate.markModified('attendance');
    gameToUpdate.save();
};