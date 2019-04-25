const router = require("express").Router();
const userRoutes = require("./users");
const rates = require("./rates");
const stockRoutes = require("./stocks")
const newsRoutes = require("./news")

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
router.use("/rates", rates);
router.use("/news", newsRoutes);


//Exporting
module.exports = router;