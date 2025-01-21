const mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
    title:String,
    description:String,
    image:String
},{versionKey:false})
const blogData=mongoose.model('blog',blogSchema);
module.exports=blogData