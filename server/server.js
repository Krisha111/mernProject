// import express from 'express'
// import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import Routes from '../server/routes/route.js'

// import cors from 'cors'
const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const Routes=require('./routes/route')
const cors=require('cors')

// import {Connection} from '../database/db.js'
const app=express()
dotenv.config();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',Routes)
const user=process.env.DB_USERNAME;
const pwd=process.env.DB_PASSWORD;

// // const useRouter=require('./routes/route')
// // const cors=require('cors')

// Connection();
const URL='mongodb://127.0.0.1:27017/merncrudd';
    
    try{
       mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
          console.log("Database connected successfully...")
    }catch(error){
        console.log("Error while connecting",error)
    }

app.listen(8000,()=>{console.log("Listening at 8000")})



// const { Categories } = require('./models/model');
// app.use(express.urlencoded({extended:true}))
// app.use(cors());
// app.use(bodyParser.json())
// app.use(express.json())
// app.use(useRouter)


// mongoose
//   .connect(process.env.ATLAS_URI)
//   .then(() => {
//     console.log("Connected Successfully");
//     app.listen(process.env.PORT || 5000, (err) => {
//       if (err) console.log(err);
//       console.log(`running at port ${process.env.PORT}`);
//     });
//   })
//   .catch((error) => console.log("Failed to connect", error));

// app.get("/",(req,res)=>{
//   res.send("Hello Tout le monde")
// })













