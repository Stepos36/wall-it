const router = require("express").Router();
const currencyController = require("../../controllers/currencycontroller");

router.route("/:id")
    .get(currencyController.getHoldings)
    .post(currencyController.addHolding)
    .put(currencyController.sellHolding);
    
// Exporting
module.exports = router;