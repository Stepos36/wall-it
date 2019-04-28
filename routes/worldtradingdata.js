const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
        '&api_token=Dvk9Bf1Qefk0H0z2th3l0Gge2ZafA8FvHjc1MRDhEmJSiffj3Lk0M85AihJ8'

        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;