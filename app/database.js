var MONGO = require('../connections/mongo');

var url = 'mongodb://' + MONGO.DB_USER + ':' + MONGO.DB_PASSWORD + '@' + MONGO.DB_URI;

module.exports = {
  'url' : url
}
