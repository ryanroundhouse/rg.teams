var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema(
    {
        name: {type: String},
    }
)

// Virtual for game's URL
TeamSchema.virtual('url').get(function () {
  return '/team/' + this._id;
});

//Export model
module.exports = mongoose.model('Team', TeamSchema);