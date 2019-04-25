const router = require("express").Router();
const userRoutes = require("./users");
const stockRoutes = require("./stocks")
const newsRoutes = require("./news")

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
router.use("/news", newsRoutes);

//Exporting
module.exports = router;