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
        let items = req.body.data
        let newItemsArr = items.map(item => {
            item.user_id = parseInt(user)
            item.value = parseFloat(item.value)
            return item
        })
        console.log(newItemsArr)
        db.User_income.bulkCreate(newItemsArr)
        .then(() => {
            return db.User_income.findAll({
                where: {
                    user_id: user
                }
            }).then(results => {
                res.json(results)
            })
        })
    },
    updateIncomeItems: function(req, res) {
        console.log(req.body)
        let userId = req.params.id
        db.User_income.destroy({
            where: {
                id: req.body.id
            }
            }).then(data => {
                return db.User_income.findAll({
                    where: {
                        user_id: userId
                    }
                }).then(results => {
                    res.json(results)
                })
            })
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
        let user = req.params.id
        let items = req.body.data
        let newItemsArr = items.map(item => {
            item.user_id = parseInt(user)
            item.value = parseFloat(item.value)
            item.paydate = parseInt(item.paydate)
            return item
        })
        console.log(newItemsArr)
        db.User_expense.bulkCreate(newItemsArr)
        .then(() => {
            return db.User_expense.findAll({
                where: {
                    user_id: user
                }
            }).then(results => {
                res.json(results)
            })
        })

    },
    updateExpenseItems: function(req, res) {
        console.log(req.body)
        let userId = req.params.id
        db.User_expense.destroy({
            where: {
                id: req.body.id
            }
            }).then(data => {
                return db.User_expense.findAll({
                    where: {
                        user_id: userId
                    }
                }).then(results => {
                    res.json(results)
                })
            })
    }
}