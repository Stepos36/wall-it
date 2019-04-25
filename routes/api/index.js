const router = require("express").Router();
const userRoutes = require("./users");
const stockRoutes = require("./stocks");
const rates = require("./rates");

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
router.use("/rates", rates);

//Exporting
module.exports = router;