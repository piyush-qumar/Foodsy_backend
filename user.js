const mongoose = require('mongoose')
const validator=require('validator');
const Schema= mongoose.Schema
const userSchema= new Schema({
    name:{
        type: String,
        required:[true, 'Please tell us your name']
    },
    rollno:{
        type: String,
        required:[true,'Please provide your roll number']
    },
    colname:{
        type:String,
        required:[true,'Please provide your college name']
    },
    email:{
        type: String,
        required:[true, 'Please tell us your email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail, 'Please provide a valid email']
    },
    phone:{
        type: String,
        required:[true, 'Please tell us your mobile number']
    },
    password:{
        type: String,
        required:[true, 'Please provide a password'],
        minlength:8
    },
    confpwd:{
        type:String,
        required:[true,'Please confirm your password']
    }
}, {timestamps: true});
const User =mongoose.model('User', userSchema);
module.exports = User;