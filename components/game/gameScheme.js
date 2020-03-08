var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AttendanceSchema = new Schema(
  {
    person: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    status: {type: String},
    comment: {type: String},
  }
);
mongoose.model('Attendance', AttendanceSchema);

var GameSchema = new Schema(
    {
        date: {type: Date},
        team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
        teamMembers: [String],
        attendance: [AttendanceSchema],
    }
);

// Virtual for game's URL
GameSchema.virtual('url').get(function () {
  return '/game/' + this._id;
});

//Export model
module.exports = mongoose.model('Game', GameSchema);