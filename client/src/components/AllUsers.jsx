import React,{useEffect,useState} from 'react'
import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button,FormControl,InputLabel,Input} from '@mui/material'
import {getUsers,deleteUserapi} from '../service/api'
import {Link} from 'react-router-dom'



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

export default function AllUsers() {
   const [users,setUsers]=useState([]);
  useEffect(()=>{
    getAllUsers()
  },[])
  const getAllUsers=async()=>{
    const response=await getUsers()
    setUsers(response.data)
    // console.log(response.data)
  }
  const deleteUser=async(id)=>{
    await deleteUserapi(id)
    getAllUsers()
  }
  return (
    <StyledTablee>
      <TableHead>
        <Thead>
         <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Hobby</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
      {/* <input type="checkbox" />  */}

         {
           users.map(user=>(
            <>
           
            <TableRow key={user._id}>
            <FormControl>
              <InputLabel></InputLabel>
              <Input type="checkbox"/>
            </FormControl>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.hobbies}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Update</Button>
                
              </TableCell>
              <TableCell>
                
                <Button variant="contained" color="secondary" onClick={()=>deleteUser(user._id)}>Delete</Button>
              </TableCell>
            </TableRow>
            </>
           ))
         }
      </TableBody>
    </StyledTablee>
  )
}


