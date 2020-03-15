var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AttendanceSchema = new Schema(
  {
    person: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    status: {type: String},
    comment: {type: String},
  }
);

//Export model
exports.schema = AttendanceSchema;
exports.Attendee = mongoose.model('Attendee', AttendanceSchema);