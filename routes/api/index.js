const router = require("express").Router();
const userRoutes = require("./users");
const stockRoutes = require("./stocks")

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes)

//Exporting
module.exports = router;