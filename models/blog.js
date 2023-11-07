const mongoose=require('mongoose');
const Schema=mongoose.Schema

//create schema

const BlogSchema=new Schema(
    {
    title:String,
    message:String,
    dateCreated:{
        type:Date,
        default:Date.now
    }
});

//create model

const Blog=mongoose.model('Blog',BlogSchema);

//export blog

module.exports=Blog;