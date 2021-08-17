const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required: true
    },
    email :{
        type:String,
        required: true

    },
    mobile:{
        type:Number,
        required: true

    },
    username:{
        type:String,
        required: true

    },
    password:{
        type:String,
        required: true

    }

})
const User= mongoose.model('USER', userSchema)

module.exports= User;
