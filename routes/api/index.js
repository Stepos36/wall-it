const router = require("express").Router();
const userRoutes = require("./users");
<<<<<<< HEAD
const stockRoutes = require("./stocks");
const rates = require("./rates");
=======
const stockRoutes = require("./stocks")
const newsRoutes = require("./news")
>>>>>>> ec5dc0b233f795269cb5245730d5817320950022

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
<<<<<<< HEAD
router.use("/rates", rates);
=======
router.use("/news", newsRoutes);
>>>>>>> ec5dc0b233f795269cb5245730d5817320950022

//Exporting
module.exports = router;