var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var attendanceSchema = new Schema(
  {
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    status: {type: String},
    comment: {type: Comment},
  }
);

var GameSchema = new Schema(
    {
        date: {type: Date},
        team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
        teamMembers: [String],
        attendance: [attendanceSchema],
    }
);

// Virtual for game's URL
GameSchema.virtual('url').get(function () {
  return '/game/' + this._id;
});

//Export model
module.exports = mongoose.model('Game', GameSchema);