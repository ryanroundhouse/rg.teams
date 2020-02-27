var Game = require('../models/game');

exports.add = function(req, res){
    var newGame = new Game(
        {
            date: req.body.singleDate,
        }
    );
    // Save the new model instance, passing a callback
    newGame.save(function (err) {
        if (err)
        { 
            return handleError(err);
        }
        console.log("saved " + newGame._id)
    });
    res.send('Game added');
};

exports.getAll = function(req, res){
    Game.find({}, 'date', function(err, games){
        if (err) 
        {
            return handleError(err);
        }
        res.send(games);
    })
};

exports.getById = function(req, res){
    Game.findById(req.params.id, function(err, games){
        if (err) 
        {
            return handleError(err);
        }
        res.send(games);
    })
};