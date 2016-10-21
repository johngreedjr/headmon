var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

var entriesSchema = mongoose.Schema({
  "status": { "type" : Number, "default" : 1 },
  "painLevel": Number,
  "date": Date,
  "notes": String
}, {
  timestamps : true
});

module.exports = mongoose.model('entries', entriesSchema);
