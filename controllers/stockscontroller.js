const db = require("../models");

module.exports = {
	getHoldings: function(req, res) {
        let id = req.params.id
        console.log(id);
    },
    addHolding: function(req, res) {
        let id = req.params.id;
        console.log(id)
        let symbol = req.body.symbol
        let quantity = req.body.quantity
        let price = req.body.price
        db.Stock_buy.create({
            quantity: quantity,
            user_id: id,
            stock_symbol: symbol,
            price: price,
            stock_holding_id: ""
        }).then(data => {res.json(data)})
    }
}