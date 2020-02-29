var Game = require('../models/game');

exports.add = function(req, res){
    var date = new Date(req.body.singleDate + ' ' + req.body.singleTime); 
    var newGame = new Game(
        {
            date: date,
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
    res.redirect('back');
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

exports.deleteById = function(req, res){
    var result = Game.deleteOne({_id: req.params.id}, function(err, result){
        if (err){
            return handleError(err);
        }
        else{
            res.redirect('back');
        }
    })
};