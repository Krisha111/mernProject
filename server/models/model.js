
const mongoose=require('mongoose')


const happy =new mongoose.Schema({
   
    name: {
        type: String,
      },
      hobbies:{
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type : String
       }
 })
 


const Category = mongoose.model("Category", happy)



module.exports=Category;