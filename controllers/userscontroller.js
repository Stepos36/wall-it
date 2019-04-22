const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
	login: function(req, res) {
        let email = req.body.email
        let password = req.body.password
        db.User.findOne({
            where: {
                email: email
            }
        }).then(dbUser => {
            bcrypt.compare(password, dbUser.dataValues.password, function(err, response) {
                if (response === true) {
                    res.json(dbUser)
                }
                else if (response === false) {
                    res.status(205).json({error: "Incorrect Password"})
                }
            });
        })
	},
	register: function(req, res) {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let password = req.body.password
        bcrypt.hash(password, saltRounds, function(err, hash) {
            db.User.create({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: hash
            }).then(dbUser => {
                res.json(dbUser)
            })
          });
	}
};