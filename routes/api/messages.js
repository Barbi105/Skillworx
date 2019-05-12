const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

// Matches with "/api/messages"
router.route("/")
  .get(messagesController.findAll)
  .post(messagesController.create);

// Matches with "/api/messages/:id"
router.route("/:id")
  .get(messagesController.findById)
  .put(messagesController.update)
  .delete(messagesController.remove);

module.exports = router;