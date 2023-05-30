
import axios from 'axios'

const URL ='http://localhost:8000';

export const addUser = async(data) => {
  try{
   return await axios.post(`${URL}`,data)
  }catch(error){
    console.log("Error while calling the apis ",error)
  }
}
export const getUsers=async()=>{
  try{
   return await axios.get(`${URL}/all`)
  }catch(error){
    console.log("Error while getting the data.",error)
  }
}
export const getUser=async(id)=>{
  try{
   return await axios.get(`${URL}/${id}`)
  }catch(error){
    console.log("Error while getting the data of single user.",error)
  }
}
export const editUser=async(user,id)=>{
  try{
   return await axios.patch(`${URL}/${id}`,user)
  }catch(error){
    console.log("Error while calling edituser api",error)
  }
}
export const deleteUserapi=async(id)=>{
  try{
    return await axios.delete(`${URL}/${id}`)
   }catch(error){
     console.log("Error while calling deleteuser api",error)
   }
} 