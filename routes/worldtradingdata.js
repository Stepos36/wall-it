const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
        '&api_token=5P2F7KXjNRZqmLuyzEB35FtBoxe7Wzy4ByIsu4T16qjDWM4Gw0ncwkMnDVOu'
        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;