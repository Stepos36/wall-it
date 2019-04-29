const db = require("../models");

module.exports = {
    getIncomeItems: function(req, res) {
        db.User_income.findAll({
            where: {
                user_id: req.params.id
            }
        }).then(listData => {
            console.log(listData)
            if (listData[0]) {
                res.json(listData)
            }
            else res.status(204).json({message: "No income items found"})
        })
    },
    addIncomeItems: function(req, res) {
        let user = req.params.id
        let items = req.body
        console.log(user, items)
    },
    updateIncomeItems: function(req, res) {

    },
    getExpenseItems: function(req, res) {
        db.User_expense.findAll({
            where: {
                user_id: req.params.id
            }
        }).then(listData => {
            console.log(listData)
            if (listData[0]) {
                res.json(listData)
            }
            else res.status(204).json({message: "No expense items found"})
        })
    },
    addExpenseItems: function(req, res) {

    },
    updateExpenseItems: function(req, res) {

    }
}