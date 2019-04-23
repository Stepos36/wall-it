const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router.route("/:id")
    .get(stocksController.getHoldings)
    .post(stocksController.addHolding);
    
// Exporting
module.exports = router;