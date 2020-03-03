var Person = require('./personScheme');

exports.add = function(name, teamId, email){
    var newPerson = new Person(
        {
            name: name,
            team: teamId,
            email: email,
        }
    );
    // Save the new model instance, passing a callback
    newPerson.save(function (err) {
        if (err)
        { 
            return handleError(err);
        }
        console.log("saved Person " + newPerson._id)
    });
};

exports.getByID = function(id){
    return Person.findById(id).populate('team').exec();
};

exports.getAll = function(){
    return Person.find({}).exec();
};

exports.getByTeam = function(teamId){
    return Person.find({team: teamId}).exec();
};

exports.deleteById = function(id){
    const result = Person.deleteOne({_id: id}, function(err, res){
        if (err){
            return handleError(err);
        }
    });
    return result;
};