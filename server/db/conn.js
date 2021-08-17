const mongoose = require("mongoose");

//const DB = process.env.DATABASE;
const DB ='mongodb+srv://admin-1:Rorida@123@cluster0.v0tdl.mongodb.net/Rorida?retryWrites=true&w=majority'




mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.log("no connection"));
