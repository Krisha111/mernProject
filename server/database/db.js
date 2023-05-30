const mongoose=require('mongoose')
export default Connection= async()=>{
    const URL=`mongodb+srv://admin:admin123@cluster0.9d4mpbh.mongodb.net/?retryWrites=true&w=majority`;
    
    try{
      await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
          console.log("Database connected successfully...")
    }catch(error){
        console.log("Error while connecting",error)
    }
}