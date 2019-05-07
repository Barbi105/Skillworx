const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs");

// Book routes
router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);

module.exports = router;