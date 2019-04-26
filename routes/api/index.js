const router = require("express").Router();
const userRoutes = require("./users");
const stockRoutes = require("./stocks");
const watchlistRoutes = require("./watchlist");

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
router.use("/watchlist", watchlistRoutes)

//Exporting
module.exports = router;