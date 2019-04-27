const router = require("express").Router();
const budgetController = require("../../controllers/budgetcontroller.js");

router.route("/:id")
    .get(budgetController.getItems)
    .post(budgetController.addItems)
    .put(budgetController.updateItems);

module.exports = router;