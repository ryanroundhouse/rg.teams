var Game = require('./gameScheme');

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
    return Game.findById(id).populate('team').exec();
};

exports.getAll = function(){
    return Game.find({}).exec();
};

exports.deleteById = function(id){
    const result = Game.deleteOne({_id: id}, function(err, res){
        if (err){
            return handleError(err);
        }
    });
    return result;
};