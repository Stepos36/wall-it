const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/register")
    .post(usersController.register);
    
router.route("/login")
    .post(usersController.login)

// Exporting
module.exports = router;