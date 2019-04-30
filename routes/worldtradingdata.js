const router = require("express").Router();
const axios = require("axios");

router.route("/")
    .post((req, res) => {
        let symbols = req.body.symbols
        let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+symbols+
<<<<<<< HEAD
        '&api_token=PpDqdrjyhNdLa3TQvX7PVlVkCD8BIErUHnOEolFo201hQCf9WD5Fc9fvOWOB'
=======
        '&api_token=Uq7VIpL1tmDL99KrHyxVfMf1RzevUQkY07MPdYP7iVwFmStWwmKLyegAnQoM'
>>>>>>> 5575c05982269100f79974d5a63373bb2ae1fd2f
        axios.get(query)
        .then(result => {
            res.status(200).json(result.data)
        })
    })

module.exports = router;