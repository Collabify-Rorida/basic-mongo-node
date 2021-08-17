const express=require('express');
const dotenv = require('dotenv');
const mongoose=require('mongoose');


const app=express();

dotenv.config({path:'../config.env'});

require('./db/conn')

app.use(require('./router/auth'));


//const PORT = process.env.PORT;
const PORT = "3001"








///middleware 

// const userIsLogin=(req,res,next)=>{
//     console.log("hello middleware")
//     next()

// }


app.get('/',(req,res)=>{
    res.send("hello word from server");
})
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})

// app.get('/about',userIsLogin,(req,res)=>{
//     res.send("about page")
// })

// app.get('/contact',(req,res)=>{
//     res.send("contact page")
// })

// app.get('/login',(req,res)=>{
//     res.send("login page")
// })

// app.get('/signup',(req,res)=>{
//     res.send("signup page")
// })



app.listen(PORT,(req,res)=>{
    console.log(`server is running at ${PORT}`);
})
