const {Schema , model} = require('mongoose');
const userschema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    age:Number
})

const userModel = model('user' , userschema) 

module.exports = userModel;