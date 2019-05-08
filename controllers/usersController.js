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
    console.log(req.body);
    db.User.create(req.body).then(function(user){
      console.log(user);
      res.json(user);
    })
      // .then(dbModel => {
      //   console.log(dbModel)
      //   res.json(dbModel)})
      // // .then(res.redirect(307, "/api/users/login"))
      // .then(()=> res.status(200).json())
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
  populate: function(req, res) {
    db.User
      .find({}) // todo: check to make sure no specific user is needed here
      .populate("jobs")
      .then(function(dbUser){
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};