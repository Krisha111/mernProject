const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const Routes=require('./routes/route')
const cors=require('cors')

const app=express()
dotenv.config();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',Routes)
const user=process.env.DB_USERNAME;
const pwd=process.env.DB_PASSWORD;

const URL='mongodb://127.0.0.1:27017/merncrudd';
    
    try{
       mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
          console.log("Database connected successfully...")
    }catch(error){
        console.log("Error while connecting",error)
    }

app.listen(8000,()=>{console.log("Listening at 8000")})














