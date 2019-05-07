var router = require("express").Router();
var usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create);

// Matches with "/api/users/populated"
router.route("/populated")
  .get(usersController.populate);

module.exports = router;
