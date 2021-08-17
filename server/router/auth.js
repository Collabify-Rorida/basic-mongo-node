const express= require('express');

const router = express.Router();
const cors = require("cors");
router.use(cors());

require('../db/conn')

const User= require('../model/userSchema');




router.get('/',(req,res)=>{
    res.send("hello word from router");
})


router.post('/register',async(req,res)=>{
 
         console.log(res.body);
        const { fullname,email,username,password,mobile}= await req.body;

            if(!fullname ||  !email || !mobile||  !password || !username){

                 return res.status(422).json({error:"fill properly"});
              }
  try{

        const userExist = await User.findOne({email:email});

          if(userExist){

              return res.status(422).json({error:"user already exist"});
         }

      const user=new User({fullname,email,mobile,password})

      const userRegistered = await  user.save()


    
    }catch(err){

        console.log(error)
    }
}
)


// login route

router.post('/signin',async(req,res)=>{
    try{
                
        const {email,password}=req.body;
          if(!email || !password){
              return res.status(400).json({error:"fill the data"})
          }      

          const userLogin =await User.findOne({email,password})
          if(userLogin){
            res.json({message:"success"})

          }else{

            res.json({error:"success"})
          }
          

    }catch(err){
        console.log(err)
    }
})




module.exports= router;
