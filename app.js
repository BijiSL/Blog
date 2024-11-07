const express=require('express');
const app=new express();
const dotenv=require('dotenv');
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
const userRoutes=require('./routes/userroutes');

app.use('/user',userRoutes);



app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})