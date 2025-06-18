import axios from 'axios';
import React,  { useState}from 'react'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material'
 export const User = () => {
    var[user,SetUser]=useState([])
axios.get("https://jsonplaceholder.typicode.com/users")
 .then((res)=>{
    SetUser(res.data)
    console.log(user)
  })
  return (
    <div>
        <TableContainer> <Table>
<TableHead>
    <TableRow>
        <TableCell>name</TableCell>
        <TableCell>username</TableCell>
        <TableCell>palce</TableCell>

    </TableRow>
</TableHead>
<TableBody>
    {user.map((val)=>{
    return(
<TableRow>
     <TableCell>{val.name}</TableCell>
        <TableCell>{val.username}</TableCell>
        <TableCell>{val.address.city}</TableCell>
</TableRow>
    )
     })}
    <TableRow>
         <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
    </TableRow>
</TableBody>
</Table>
        </TableContainer>
    </div>
  )
}

export default User