const express = require('express')
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const jwt=require('jsonwebtoken');
const blogModel = require('../model/blogData');

function verifytoken(req,res,next){
    let token=req.headers.token;
    try{
        if(!token) throw 'unauthorized access';
        else{
            let payload=jwt.verify(token,'blogApp');
            if(!payload) throw 'unauthorized access';
            next(); //it is used to exit from the function and move to next query at the time of function call in the below step 
        }
    }
    catch(error){
        console.log(error);
    }

}


    //Read
    router.get('/',async (req,res) =>{
        try {
            const data = await blogModel.find()
            res.send(data);  
            
        } catch (error) {
            res.send("Failed to fetch data")
        }
    })
    //Create
    router.post('/addblog',verifytoken,async (req,res) =>{
        try {
            const data = new blogModel(req.body);
            await data.save();
            res.send({message:'Blog Added successfully'});
        } catch (error) {
            res.send({message:"Failed to add data"})
        }
    })
    //update
    router.put('/updateblog/:id',verifytoken, async (req,res) => {
        try {
            const updatedblog = await blogModel.findByIdAndUpdate(req.params.id,req.body);
            if(!updatedblog){
               return res.send({message:'Blog not found'})
            }
            res.send({message:"Blog updated successfully"})
        } catch (error) {
            res.send({message:'Failed to updated blog'})
        }
    })
    //delete
    router.delete('/deleteblog/:id',verifytoken, async (req,res) =>{
        try {
            const deletedblog =await blogModel.findByIdAndDelete(req.params.id)
            if(!deletedblog){
                return res.send({message:'Blog not found'})
            }
            res.send({message:'Blog deleted successfully'})
        } catch (error) {
            res.send({message:'Failed to delete Blog'})
        }
    })




module.exports = router