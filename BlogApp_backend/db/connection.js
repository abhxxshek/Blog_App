const mongoose=require('mongoose');
mongoose.connect(process.env.mongoDBurl).then(()=>{
    console.log("DB connection established successfully");
}).catch((error)=>{
    console.error("DB connection unsuccessful !",error);
})