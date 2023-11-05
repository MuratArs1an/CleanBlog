const express=require('express');
const app=express();
const ejs=require('ejs');
const port=3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} unda Başlatıldı`);
});

//template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{
    res.render('add_post')
})
