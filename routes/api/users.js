var router = require("express").Router();
var usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create);

// Matches with "/api/users/:id"
router.route("/:id")
.get(usersController.findById);

// Matches "/api/users/jobs". Populate for user
router.route("/jobs")
  .get(usersController.populateJobs);

// Matches "/api/users/:id/messages". Populate for user
router.route("/messages")
  .get(usersController.getMessages)
  .post(usersController.saveMessage);

router.route("/signup")
  .post(usersController.create);

// Find user if login exists
router.route("/login")
  .post(passport.authenticate("local"), function(req, res) {
      //redirect them to page..
      res.json("/search");
});

module.exports = router;
