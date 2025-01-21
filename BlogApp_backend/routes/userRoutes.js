const express=require('express');
const router=express.Router();
router.use(express.json());
const userModel=require('../model/userData')
const jwt=require('jsonwebtoken');//used to generate tokens (tokens is the individual identity given to each user at the time of logging in)
router.post('/login',async(req,res)=>{
    const user=await userModel.findOne({email:req.body.email});  //the first email is the email in the database and the second email is the email in the input field in the login page
    if(!user){
        res.status(404).send({message:'User not found !'});
    }
    try{
        if(user.password==req.body.password){
            const payload={email:user.email,password:user.password}; //first email is the field name 
            const token=jwt.sign(payload,'blogApp')  //blogApp is the secret key that we gave,we can give any secret key according to our desire
            res.status(200).send({message:'Login successful',token:token})//the first token can be given any name ,but the second token is the token declared in the above step
        }
        else{
            res.status(400).send({message:'Invalid credentials'}) 
        }
    }catch(error){
        console.log(error);
    }
})

router.post('/adduser',async(req,res)=>{
    try{
        const item=req.body;
    const data=new userModel(item);
    await data.save();
    res.status(200).send({message:'USER ADDED SUCCESSFULLY'});
    }catch(error){
        res.send({message:'User registration failed!'});
        console.log(error)
    }

})

module.exports=router