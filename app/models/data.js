var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

var dataSchema = mongoose.Schema({
  "painLevel": Number,
  "date": Date,
  "notes": String
}, {
  timestamps : true
});

module.exports = mongoose.model('data', dataSchema);
