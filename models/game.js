var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GameSchema = new Schema(
    {
        date: {type: Date},
    }
)

// Virtual for game's URL
GameSchema
.virtual('url')
.get(function () {
  return '/game/' + this._id;
});

//Export model
module.exports = mongoose.model('Game', GameSchema);