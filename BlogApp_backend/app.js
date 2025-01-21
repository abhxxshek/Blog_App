const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
const cors=require('cors')

app.use(cors());
const blogRoutes = require('./routes/blogRoutes');
 app.use('/blog', blogRoutes);
 const userroutes=require('./routes/userRoutes');
 app.use('/user',userroutes);




// app.use(express.static('public'));
require('dotenv').config(); //this should be written before requiring the connection file otherwise it will become an error ,because we are taking the the db url from the env file using (process.env.DB_url)
require('./db/connection');





app.listen(process.env.port,(res,req)=>{
    console.log(`Server listening on port ${process.env.port}`);
})