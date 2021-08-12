const mongoose = require('mongoose');

var schema = new mongoose.Schema({
      d_id: {
        type:Number
    },
    name: {
        type:String
    },
    Speciality: {
        type:String
    }
})
const Doctor = mongoose.model('Doctor', schema);
module.exports = Doctor;