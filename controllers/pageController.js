const Blog=require('../models/blog');

exports.getAboutPage=(req,res)=>{
    res.render('about')
};

exports.getAddBlogPage=(req,res)=>{
    res.render('add_post')
};

exports.getEditPage=async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.render("edit", {
        blog,
    });
};