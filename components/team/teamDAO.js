var Team = require('./teamScheme');

exports.add = function(teamName){
    var newTeam = new Team(
        {
            name: teamName,
        }
    );
    // Save the new model instance, passing a callback
    newTeam.save(function (err) {
        if (err)
        { 
            return handleError(err);
        }
        console.log("saved Team " + newTeam._id)
    });
};

exports.getByID = function(id){
    return Team.findById(id).exec();
};

exports.getAll = function(){
    return Team.find({}).exec();
};

exports.deleteById = function(id){
    const result = Team.deleteOne({_id: id}, function(err, res){
        if (err){
            return handleError(err);
        }
    });
    return result;
};

exports.removePerson = async function(teamId, personId){
    var team = await exports.getByID(teamId);
    for (var i = 0; i < attendance.length; i++){
        
    }
}