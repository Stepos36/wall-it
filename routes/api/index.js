const router = require("express").Router();
const userRoutes = require("./users");
<<<<<<< HEAD
<<<<<<< HEAD
const stockRoutes = require("./stocks");
const rates = require("./rates");
=======
const stockRoutes = require("./stocks")
const newsRoutes = require("./news")
>>>>>>> ec5dc0b233f795269cb5245730d5817320950022
=======
const stockRoutes = require("./stocks");
const rates = require("./rates");
const stockRoutes = require("./stocks")
const newsRoutes = require("./news")
>>>>>>> master

// Item routes
router.use("/users", userRoutes);
router.use("/stocks", stockRoutes);
<<<<<<< HEAD
<<<<<<< HEAD
router.use("/rates", rates);
=======
router.use("/news", newsRoutes);
>>>>>>> ec5dc0b233f795269cb5245730d5817320950022
=======
router.use("/rates", rates);
router.use("/news", newsRoutes);

>>>>>>> master

//Exporting
module.exports = router;