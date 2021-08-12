const mongoose= require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./DB/connection');
const cors = require('cors');
// require("./DB/connection");
const Vaccine = require("./model/vaccines");
const Doctor = require("./model/doctors");
const Resister = require("./Model/registers");
const app = express();

dotenv.config({path:'config.env'})  

const Port = process.env.PORT || 8080

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.urlencoded({extended: true})); 
 
// mongoose.connect("mongodb://localhost:27017/celebal",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, ()=>{
//     console.log("DB connected")
// })
app.post('/register', (req,res)=>{
    const { name, email, phone, address, pass, cpass} = req.body;
    if( !name || !email || !phone || !address || !pass || !cpass){
    return res.status(422).json({error: "filled the field properly"});
    }
    Resister.findone({email:email})
        .then((userExist) => {
            if(userExist){
    return res.status(422).json({error: "Email already exist"});
        } 
    const user = new User({ name, email, phone, work, pass, cpass });
     user.save().then(() => {
     res.status(201).json({message: "user registered successfuly" });
    }).catch((err)=> res.status(500).json({error:"failed to registered"}));
    }).catch (err => {console.log(err);})
    });


//Mongo DB connection
// connectDB();

//Parse request to body-parser


//set view engine
app.get("/celebal/Vaccine",async(req, res) =>{
    try{
        
        const VaccineData = await Vaccine.find();
        res.send(VaccineData);
        console.log(VaccineData);

    }catch(e){
        res.send(e);

    }
});


//load router

app.use('/auth', function(req, res){
    console.log(req.body);
    res.send('heelo');
});

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});


// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// const staticpath = path.join(__dirname,"../public");

// app.use(express.static(staticpath));


// app.post("/",async(req, res) =>{
//     try{
//         const Loginemployee = new Login({
//             name: req.body.name,
//             email: req.body.email,
//             number: req.body.number,
//             message:req.body.message

//         });
//         console.log(req.body);
// const Logined = await Loginemployee.save();

// res.status(201).send(Logined);
//     }
//     catch(error){
//         res.status(404).send(error);
//     }
    
// });
// app.get("/getapi",async(req, res) =>{
//     try{
//         const StudentData = await Login.find();
//         res.send(StudentData);

//     }catch(e){
//         res.send(e);

//     }
// });










// app.listen(8080, () => {
//     console.log("listing the port at 3000");
// });