const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
        '&api_token=Uq7VIpL1tmDL99KrHyxVfMf1RzevUQkY07MPdYP7iVwFmStWwmKLyegAnQoM'
        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;