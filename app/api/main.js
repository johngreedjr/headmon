var express = require('express'),
    api     = express.Router();

var Entries  = require('../models/entries');

api.use(function(req, res, next) {
	next();
});

api.get('/entries', function(req, res, next) {
    Entries
    .find({ status: 1 })
    .exec(function(err, entries) {
      if (err)
        console.log(err.stack);
      res.json(entries);
    });
});

api.get('/entries/:id', function(req, res, next) {
  Entries
    .findById(req.params.id)
    .exec(function(err, entries) {
      if (err)
        console.log(err.stack);
      res.json(entries);
  });
});

api.post('/entries', function(req, res) {
  if (req.body._id) {
    Entries
      .findOneAndUpdate({ _id : req.body._id }, req.body, { "new" : true })
      .select('-statusId')
      .exec(function (err, entries) {
        if (err)
          console.log(err.stack);
        res.send(entries);
      });
  } else {
    Entries
      .create(req.body, function(err, entries) {
        if (err)
          console.log(err.stack);
        res.send(entries);
      });
  }
});

api.put('/', function(req, res){
  Entries
    .findOneAndUpdate({ _id : req.body._id }, req.body, { "new" : true })
    .exec(function (err, entries) {
      if (err)
        console.log(err.stack);
      res.send(entries);
    });
});

api.delete('/entries/:id', function(req, res) {
  req.body.status = 2;
  Entries
    .findByIdAndUpdate(req.params.id, req.body)
    .exec(function (err) {
      if (err)
        console.log(err.stack);
      res.send();
    })
});

//maybe later we'll modularize this out when we have a lot of functionality
//var viewerController = require('./viewerController');
//var entryController = require('./entryController');

//api.use('/viewerController', viewerController);
//api.use('/entryController', entryController);



module.exports = api;
