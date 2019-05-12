const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(user => res.json(user))
      // .then(res.json(307, "/api/users/login"))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  populateJobs: function(req, res) {
    db.User
      .find({_id: req.user._id})
      .populate("jobs")
      .then(function(dbUser){
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  getMessages: function(req, res) {
    db.User
      .find({_id: req.user.id})
      .then(dbUser => {
        let messages = dbUser.map(elem => elem.messages); 
        res.json(messages);
      })
      .catch(err => res.json(err));
  },
  saveMessage: function(req, res) {
    db.User
      .findOneAndUpdate(
        { _id: req.user._id },
        { $push: { messages: req.body } },
        { new: true }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};