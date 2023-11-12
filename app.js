const express=require('express');
const app=express();
const ejs=require('ejs');
const port=3000;
const mongoose=require('mongoose')
const Blog=require('./models/blog')
const path=require('path')
const methodOverride=require('method-override')
const blogController=require('./controllers/blogController')
const pageController=require('./controllers/pageController')

mongoose.connect('mongodb://127.0.0.1:27017/clean-blog-db');

//template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',{
    methods:['POST','GET']
}));

//Routes
app.get('/',blogController.getAllBlogs);
app.get('/blogs/:id',blogController.getBlog);
app.post('/blogs', blogController.createBlog);
app.put('/blogs/:id',blogController.updateBlog);
app.delete('/blogs/:id', blogController.deleteBlog);
app.get('/about',pageController.getAboutPage);
app.get('/add_post',pageController.getAddBlogPage);
app.get('/blogs/edit/:id',pageController.getEditPage)

app.listen(port,()=>{
    console.log(`Sunucu ${port} unda Başlatıldı`);
});