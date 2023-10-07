const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require("dotenv").config();
PORT=process.env.PORT;
const app=express();
app.use(express.json( {limit :"25 mb" }));
app.use(cors());
app.listen(PORT , ()=>{
    console.log("app is listening at port + "+`${PORT}`);
})
const connectDb=require('./config/database');
connectDb();

const userRouter=require('./routes/Routes');
app.use(userRouter);
app.get('/login',(req,res)=>{
    res.send('app is running');
})