const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/userDB'
const user = require('../models/user');
const router = express.Router();
// const jwt = require('jsonwebtoken'); 
// const config = require("../config/auth.config");

// const register = express();
// register.use(express.json());
// register.use(express.urlencoded({extended: false}))

mongoose.connect(url , {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true , useFindAndModify:false})
const con = mongoose.connection;

con.on('open' , ()=>{
    console.log('Database connected')
})

// router.post('/reg' , async (req,res)=>{
router.post('/reg' , async (req,res)=>{
    try{    
        // const token = await jwt.sign({email: req.body.email}, config.secret)
        // console.log(token)
        const registerUser = await new user({
            name: req.body.name,
            // date: req.body.date,
            houseno: req.body.houseno,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            // state: req.body.state,
            phoneNumber:req.body.phoneNumber,
            email: req.body.email,
            password: req.body.password
            // gender: req.body.gender,
            // confirmationCode: token
          })
        console.log(req.body);
         const check = await registerUser.save();
         console.log("checked")
         res.status(201).send(check);
    //     .then(()=>{
    //         console.log(registerUser);
    //         res.send(registerUser);
    //         const _id = registerUser._id;
    //         console.log("reg successful");
    //   })
//       .catch((e)=>{
//           res.status(400).send(e);
//           console.log("error are as follows:-")
//           console.log(e);
//       })
//   }
//   catch(error){
//       res.status(400).send(error);
//       // console.log(error)
//   }
// })

        }
        catch(error){
            res.status(404).send(error);
        }
    });

// router.get('/reg' , (req,res)=>{
router.get('/reg' , (req,res)=>{
    user.find({}).then((user)=>{
        // console.log(user);
        res.send(user);
    })
})

router.post('/login', async (req, res)=>{
try{
    const { email, password}= req.body;
    if(!email || !password){
        return res.status(400).json({error: "enter fields"})
    }
    const userLogin = await user.findOne({ email: email});
    console.log(userLogin);
    if(!userLogin){
        res.json({error: "user error"});
    }
    else{
        res.json({message: " user sigin successfully"});
    }
}
catch(err){
    console.log(err);
}
})

module.exports = router
