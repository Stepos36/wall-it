const router = require("express").Router();
const path = require('path');

const usersController = require("../../controllers/userscontroller");

// Matches with "/api/users"
router.route("/register")
    .post(usersController.register);
    
router.route("/login")
    .post(usersController.login);

// Exporting
module.exports = router;