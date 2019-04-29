const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
        '7j9FnMBpalVytmiowz2gdPdq6lYk2PDNtJUvLTQjxBUqWxnp6Sp5Az3gS9g5'

        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;