const express=require('express');
const app=express();
const ejs=require('ejs');
const port=3000;
const mongoose=require('mongoose')
const Blog=require('./models/blog')
const path=require('path')

mongoose.connect('mongodb://127.0.0.1:27017/clean-blog-db');

app.listen(port,()=>{
    console.log(`Sunucu ${port} unda Başlatıldı`);
});

//template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',async (req,res)=>{
    const blogs=await Blog.find({})
    res.render('index',{
        blogs
    })
})

app.get('/blogs/:id',async(req,res)=>{
    const blog=await Blog.findById(req.params.id);
    res.render('post',{
        blog
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{
    res.render('add_post')
})

app.post('/blogs', async (req,res)=>{
    await Blog.create(req.body);
    res.redirect('/')
});


