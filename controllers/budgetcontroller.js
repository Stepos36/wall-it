const db = require("../models");

module.exports = {
	expense: function(req, res) {
        let id = req.params.id;
        let description = req.params.description;
        let value = req.params.value;
        this.percentage = -1;
        db.Stock_holding.findAll({
            where: {
                user_id: id
            },
            include: [db.Stock_buy, db.Stock_sell]
        }).then(data => {res.json(data)})
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
    },
    sellHolding: function(req, res) {
        let id = req.params.id;
        let symbol = req.body.symbol;
        let quantity = req.body.quantity;
        let price = req.body.price;
        db.Stock_sell.create({
            quantity: quantity,
            user_id: id,
            stock_symbol: symbol,
            price: price,
            stock_holding_id: ""
        }).then(data => {res.json(data)})
    }
}