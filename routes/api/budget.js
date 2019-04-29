const router = require("express").Router();
const budgetController = require("../../controllers/budgetcontroller.js");

router.route("/income/:id")
    .get(budgetController.getIncomeItems)
    .post(budgetController.addIncomeItems)
    .put(budgetController.updateIncomeItems);

router.route("/expenses/:id")
    .get(budgetController.getExpenseItems)
    .post(budgetController.addExpenseItems)
    .put(budgetController.updateExpenseItems);

module.exports = router;