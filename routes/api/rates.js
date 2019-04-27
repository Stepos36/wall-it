const router = require("express").Router();

var axios = require("axios");
var cheerio = require("cheerio");

router.route("/")
    .get((req, res) => {
        console.log('first console log');
        axios.get("https://www.wellsfargo.com/mortgage/rates/").then(function (response) {
            console.log('hello');
            var $ = cheerio.load(response.data);
            var wellsFargoArray = [];
            $("tr").each(function (i, element) {
                var wellsFargoResult = {};
                wellsFargoResult.interestRate = $(this)
                    .children("td:nth-of-type(1)")
                    .text();
                wellsFargoResult.apr = $(this)
                    .children("td:nth-of-type(2)")
                    .text();
                if (wellsFargoResult.interestRate && wellsFargoArray.length < 6) {
                    wellsFargoArray.push(wellsFargoResult);
                };
            });
            wellsFargoArray[0].name = "30-Year Fixed Rate";
            wellsFargoArray[1].name = "30-Year Fixed Rate VA";
            wellsFargoArray[2].name = "20-Year Fixed Rate";
            wellsFargoArray[3].name = "15-Year Fixed Rate";
            wellsFargoArray[4].name = "7/1 ARM";
            wellsFargoArray[5].name = "5/1 ARM";
            console.log(wellsFargoArray);
            res.send(wellsFargoArray);
        })
            .catch(err => console.log(err.response));
    })

module.exports = router;