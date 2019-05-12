const db = require("../models");

// Defining methods for the messagesController
module.exports = {
  findAll: function(req, res) {
    db.Message
      .find({})
      .then(messages => res.send(messages))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Message
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Message
      .create(req.body)
      .then(dbMessage => db.User.findOneAndUpdate(
        { _id: req.user._id}, 
        { $push: {messages: dbMessage._id} }, 
        {new: true}
        ))
      .then(Message => res.json(Message))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Message
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Message
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};