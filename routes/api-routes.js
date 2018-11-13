const db = require('../models/');

const mongoose = require("mongoose");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  //get routes
  app.get('/api/task', function(req, res) {
    db.Event.find({})
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
  });
  
  app.get('/api/task/:task', function(req, res) {
    const matchingTasks = [];
    db.Event.find({})
    .then(function(data) {
      data.forEach(task => {
        if (task.description === req.params.task){
          matchingTasks.push(task);
        }
      })
      res.json(matchingTasks);
    })
    .catch(function(err) {
      res.json(err);
    });
  });
  
  // post routes
  app.post('/api/Task', function(req, res) {
    db.Event.create(req.body)
    .then(function(dbItem) {
      return res.json(dbItem);
    })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  /// put routes
  app.put('/api/task/:task', function(req, res) {
    db.Task.findOneAndUpdate({description: req.params.task}, { $set: { description: req.body.description , check: req.body.check } }, { new: true })
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
      .catch(function(err) {
      res.json(err);
    });
  });

  //delete routes
  app.delete('/api/task/:task', function(req, res) {
    console.log(req.params.task);
    db.Event.findOneAndDelete({description: req.params.task})
    .then(function(dbItem) {
      console.log(dbItem);
      return res.json(dbItem);
    })
      .catch(function(err) {
      res.json(err);
    });
  });
}
