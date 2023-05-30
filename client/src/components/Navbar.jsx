import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
   background-color:black;
  
`
const Tabs=styled(NavLink)`
  margin-right:15px;
`

export default function Navbar() {
  return (
    <Header position='static'>
        <Toolbar>
           <Tabs>Navbar</Tabs>
           <Tabs to='/all'>All Users</Tabs>
           <Tabs to='/add'>Add Users</Tabs>
           <Tabs to='/inter'>POp up</Tabs>
        </Toolbar>
    </Header>
  
  )
}
