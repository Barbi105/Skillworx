var router = require("express").Router();
var usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// Matches with "/api/users"

// Find user if login exists
router.route("/login")
  .post(passport.authenticate("local"), function (req, res) {
    //redirect them to page..
    res.json("/search");
  });

router.route("/logout")
  .get(usersController.logout);

router.route("/")
  .get(function (req, res) {
    if (req.user) {
      return usersController.getJobs(req, res);
      //res.json(req.user);
      // res.json("/search");
    } else {
      res.send("no user")
    }
  })
  .post(usersController.create);

// Matches "/api/users/jobs". Populate for user
router.route("/jobs")
  .get(usersController.populateJobs);

// Matches "/api/users/messages". Populate for user
router.route("/messages")
  .get(usersController.getMessages)
  .post(usersController.saveMessage);

router.route("/signup")
  .post(usersController.create);

<<<<<<< HEAD
//find user if login exists
router.route("/login")
  .post(passport.authenticate("local"), function(req, res) {
      //redirect them to page..
      res.json("/search");
});
router.route("/logout")
  .get(function(req, res) {
    console.log(req.user);
    req.logout();
    res.json("/");
    console.log(" ~~~~~~~~~~~~~~ Log user out ~~~~~~~~~~~~~~ ");
});

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
=======
router.route("/save/:id")
  .get(usersController.save)

router.route("/myjobs")
  .get(usersController.getJobs);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById);


>>>>>>> master

module.exports = router;
