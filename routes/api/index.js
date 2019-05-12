const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs");
const messageRoutes = require("./messages");

// routes
router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/messages", messageRoutes);

module.exports = router;