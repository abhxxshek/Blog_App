const { Int32 } = require('bson');
const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Int32,
    address:String

},{versionKey:false})

const userData=mongoose.model('user',userSchema);
module.exports=userData
