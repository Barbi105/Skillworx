var router = require("express").Router();
var usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// Matches with "/api/users"


router.route("/")
.get(function(req,res){
  if(req.user){
      res.json(req.user);
  }else{
      res.json("no user")
  }
})
.post(usersController.create);

// Matches with "/api/users/populated"
router.route("/populated")
  .get(usersController.populate);

router.route("/signup")
  .post(usersController.create);

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
module.exports = router;
