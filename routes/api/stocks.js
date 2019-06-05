const router = require("express").Router();
const stocksController = require("../../controllers/stockscontroller");

router.route("/:id")
    .get(stocksController.getHoldings)
    .post(stocksController.addHolding)
    .put(stocksController.sellHolding)
    .delete(stocksController.deleteHolding);
    
// Exporting
module.exports = router;