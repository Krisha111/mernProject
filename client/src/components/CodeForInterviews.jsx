import React, { useState }  from "react";
import './Popup.css'
import {Table,TableRow,Button,FormControl,InputLabel,Input,FormGroup,Typography,styled} from '@mui/material'

import {useNavigate} from 'react-router-dom'

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



const StyledTablee=styled(Table)`
  width:50%;
  margin:50px auto 0 auto;
`
const Thead=styled(TableRow)`
   background:#000000;
   & > th {
     color:#fff;
     font-size:25px;
}
`
function CodeForInterviews(){
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

    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div>
            <button onClick={handleClickOpen}>Open popup</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>popup</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default CodeForInterviews;