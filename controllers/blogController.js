const Blog=require('../models/blog')

exports.getAllBlogs=async (req,res)=>{
    const blogs=await Blog.find({})
    res.render('index',{
        blogs
    })
};

exports.getBlog=async(req,res)=>{
    const blog=await Blog.findById(req.params.id);
    res.render('post',{
        blog
    })
};

exports.createBlog=async (req,res)=>{
    await Blog.create(req.body);
    res.redirect('/')
};

exports.updateBlog=async (req,res)=>{
    const blog=await Blog.findById({_id:req.params.id})
    blog.title=req.body.title
    blog.message=req.body.message
    blog.save();
    res.redirect(`/blogs/${req.params.id}`)
};

exports.deleteBlog=async(req,res)=>{
    await Blog.deleteOne({_id:req.params.id})
    res.redirect('/')
};