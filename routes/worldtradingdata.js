const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
        '&api_token=PpDqdrjyhNdLa3TQvX7PVlVkCD8BIErUHnOEolFo201hQCf9WD5Fc9fvOWOB'
        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;