const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type:String
    },

    dose_1: {
        type:String
    },

    dose_2: {
        type:String
    },
       dose_1_date: {
        type:String
    },

    dose_2_date: {
        type:String
    }

})
const Vaccine = mongoose.model('Vaccine', schema);
module.exports = Vaccine;