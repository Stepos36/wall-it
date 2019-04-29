const db = require("../models");

module.exports = {
	getList: function(req, res) {
        db.Watchlist_item.findAll({
            where: {
                user_id: req.params.id
            }
        }).then(listData => {
            console.log(listData)
            if (listData[0]) {
                res.json(listData)
            }
            else res.status(204).json({message: "No watchlist"})
        })
    },
    addListItem: function(req, res) {
        console.log(req.params.id)
        db.Watchlist_item.create({
            symbol: req.body.symbol,
            user_id: req.params.id
        }).then(listData => {
            res.json(listData)
        })
    },
    removeListItem: function(req, res) {
        db.Watchlist_item.destroy({
            where: {
                symbol: req.body.symbol,
                user_id: req.params.id
            }
        }).then(listData => {
            res.json(listData)
        })
    }
}