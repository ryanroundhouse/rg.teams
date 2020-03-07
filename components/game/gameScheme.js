var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GameSchema = new Schema(
    {
        date: {type: Date},
        team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
        teamMembers: [String],
    }
)

// Virtual for game's URL
GameSchema.virtual('url').get(function () {
  return '/game/' + this._id;
});

//Export model
module.exports = mongoose.model('Game', GameSchema);