const bcrypt = require('bcryptjs');
const { response } = require("express");
const jwt = require('jsonwebtoken');

var Userdb = require('../model/model');
var Userdb1 = require('../model/reg_schema');

// create and save new user


exports.register = function (req,res) {

    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    bcrypt.hash(req.body.pass, 10, function(err, hashedPass) {
        if(err){
            res.json({
                error: err
            })
        }

        else{
            const user = new Userdb1({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                pass: hashedPass,
                cpass: hashedPass

            })
        
        
            // save user in database
            user
                .save(user)
                .then(data => {
                    res.redirect('/');
                })
                .catch(err => {
                    res.status(500).send({
                        message:err.message || "Some Error occured while creating a create operation"
                    });
                });
        }
    })
}



exports.login_user = function (req, res){
    var email = req.body.email;
    var password = req.body.pass;

}