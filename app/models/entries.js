var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

var entriesSchema = mongoose.Schema({
  "status": { "type" : Number, "default" : 1 },
  "painLevel": Number,
  "date": Date,
  "medsTaken": String,
  "notes": String
}, {
  timestamps : true
});

module.exports = mongoose.model('entries', entriesSchema);
