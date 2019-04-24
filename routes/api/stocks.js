const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router.route("/:id")
    .get(stocksController.getHoldings)
    .post(stocksController.addHolding)
    .put(stocksController.sellHolding);
    
// Exporting
module.exports = router;