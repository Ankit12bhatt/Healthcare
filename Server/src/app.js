const express = require('express');
const path = require('path');
const registerRouter = require('./routers/register');
// const loginRouter = require('./routers/login');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(registerRouter);

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())

app.listen(port , ()=>{
    console.log('App is listening');
})
