var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new Schema(
    {
        name: {type: String},
        team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
        email: {type: String},
    }
)

// Virtual for game's URL
PersonSchema.virtual('url').get(function () {
  return '/person/' + this._id;
});

//Export model
module.exports = mongoose.model('Person', PersonSchema);