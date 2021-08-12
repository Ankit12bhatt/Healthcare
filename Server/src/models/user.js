const mongoose = require('mongoose');
const schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        // unique:true,
        // required: true
    },
    // date:{
    //     type:String,
    //     unique:true,
    //     required: true
    // },
    // date:{
    //     type:Date,
    //     // required:true
    // },
    houseno:{
        type:String,
        // required:true
    },
    street:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    state:{
        type:String,
        // required:true
    },
    phoneNumber:{
        type: Number,
        // unique: true
    },
    email:{
        type: String,
        // unique: true
    },
    password:{
        type:String,
        // required:true
    },
    
})

// userSchema.methods.generateAuthToken = async function () {
//     const user = this
//     const token = jwt.sign({ _id: user._id.toString() }, 'hereisthetoken')

//     user.tokens = user.tokens.concat({ token })
//     await user.save()

//     return token;
// }

// userSchema.statics.findByCredentials = async(username , password)=>{
//     const User = await user.findOne({username});
//     // console.log(User);
//     if(!User){
//         throw new Error("Unable to login");
//     }

//     const match = await bcrypt.compare(password, User.password);
//     if(match){
//         return User
//     }
//     else{
//         return ("Error");
//     }

// }


// userSchema.pre('save' , async function(next){
//     if(!this.isModified('password')){
//         return next()
//     }
//     this.password = await bcrypt.hash(this.password ,8);
// })

const user = new mongoose.model('user' , userSchema);
module.exports = user;