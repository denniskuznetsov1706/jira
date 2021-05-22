const express = require('express')
const mongoose = require('mongoose')
const exphbs =require('express-handlebars')
const todoRoutes = require('./routes/todo')
var bodyParser = require('body-parser');



const app=express()
const hbs = exphbs.create({
    defaultLayout :'main',
    extname:'hbs'
})

app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.set('views','views');


app.use(express.urlencoded({extended:true}))

app.use(todoRoutes)


//app.use(require('connect').bodyParser());


async function start(){
try {

    await mongoose.connect('mongodb+srv://bigxman:bigxman2021@cluster0.n8nbs.mongodb.net/DB',{
        useNewUrlParser:true,
        useFindAndModify:false
    })

    app.listen(3000,()=>{
        console.log("Server has been starting ....");
    })

 } catch (e){
        console.log(e);
    }
}

start()



