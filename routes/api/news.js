const router = require("express").Router();
const axios = require("axios");
var parseString = require('xml2js').parseString;
const GoogleNewsRss = require('google-news-rss');
const googleNews = new GoogleNewsRss();

/* router.route("/")
    .get( (req,res) => {
        axios.get("http://news.google.com/news/rss/search/section/q/business/business?gl=US&hl=en&num=10").then((response) => {
            var xml = response
            parseString(xml, {trim: true}, function (err, result) {
                console.log(err);
                console.log(result);
                // res.json(result);
            })

        }) 
    }) */

    router.route("/")
    .get( (req,res) => {
        googleNews.search('business').then((response) => {
            console.log(response)
            res.json(response)
        }) 
    })

module.exports = router;