const router = require("express").Router();
const userRoutes = require("./users");

// Item routes
router.use("/users", userRoutes);

//Exporting
module.exports = router;