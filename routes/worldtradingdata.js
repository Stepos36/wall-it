const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
        '&api_token=YgSqVpOZatgHTdMcZkIRKrI0EBuhNXOegxGr9r755dyCQoulYF4FL0MLK4Sq'
        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;