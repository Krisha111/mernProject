import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { FormGroup,FormControl,InputLabel,Input, Typography,styled ,Button} from '@mui/material'
import { addUser } from '../service/api'

const Container=styled(FormGroup)`
  width:50%;
  margin:5% auto 0 auto;
  & > div {
    margin-top:30px;
  }
`
const defaultValue={
    name:"",
    hobbies:"",
    email:"",
    phone:""
}

export default function AddUsers() {
    const [user,setUser]=useState(defaultValue);
    const navigate=useNavigate()
    const onValueChange=(e)=>{
        
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }
    const onUserDetails=()=>{
        console.log("Hello")
        addUser(user);
        navigate('/all')
    }
  return (
    <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Hobby</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="hobbies"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>{onValueChange(e)}} name="phone"/>
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={()=>{onUserDetails()}}>Add </Button>
        </FormControl>
    </Container>
  )
}
