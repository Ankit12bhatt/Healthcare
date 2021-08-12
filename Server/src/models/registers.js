const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    name: {
        type:String
    },

    email: {
        type:String
    },

    phone: {
        type:String
    },

    address: {
        type:String,
        unique: true
    },

    pass:{
        type:String

    },

    cpass: {
        type:String
    }
})
const Register = mongoose.model('Registers', schema);
module.exports = Register;