const db = require("../models");

module.exports = {
	getHoldings: function(req, res) {
        let id = req.params.id
        db.Currency_holding.findAll({
            where: {
                user_id: id
            },
            include: [db.Currency_buy, db.Currency_sell]
        }).then(data => {res.json(data)})
    },
    addHolding: function(req, res) {
        let id = req.params.id;
        let symbol = req.body.symbol
        let quantity = req.body.quantity
        let price = req.body.price
        db.Currency_buy.create({
            quantity: quantity,
            user_id: id,
            currency_symbol: symbol,
            price: price,
            currency_holding_id: ""
        }).then(data => {res.json(data)})
    },
    sellHolding: function(req, res) {
        let id = req.params.id;
        let symbol = req.body.symbol;
        let quantity = req.body.quantity;
        let price = req.body.price;
        db.Currency_sell.create({
            quantity: quantity,
            user_id: id,
            currency_symbol: symbol,
            price: price,
            currency_holding_id: ""
        }).then(data => {res.json(data)})
    }
}