const db = require("../models");

module.exports = {
    getIncomeItems: function(req, res) {
        
    },
    addIncomeItems: function(req, res) {
        let user = req.params.id
        let items = req.body
        console.log(user, items)
    },
    updateIncomeItems: function(req, res) {

    },
    getExpenseItems: function(req, res) {
        
    },
    addExpenseItems: function(req, res) {

    },
    updateExpenseItems: function(req, res) {

    }
}