var express = require('express'),
    api     = express.Router();

//var viewerController = require('./viewerController');
//var entryController = require('./entryController');

api.use(function(req, res, next) {
	next();
});

//api.use('/viewerController', viewerController);
//api.use('/entryController', entryController);

module.exports = api;
