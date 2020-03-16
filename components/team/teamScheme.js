var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema(
    {
        name: {type: String},
        players: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
    }
)

// Virtual for game's URL
TeamSchema.virtual('url').get(function () {
  return '/team/' + this._id;
});

//Export model
module.exports = mongoose.model('Team', TeamSchema);