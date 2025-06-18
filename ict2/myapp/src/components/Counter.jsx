import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[num,setNum]=useState(0)

     const Button1=()=>{
            setNum(num+1)
     }
      const Button2=()=>{
            setNum(num-1)
     }
     const Button3=()=>{
            setNum(0)
     }
     const Button4=()=>{
            setNum(num + 3)
     }
    
  return (
    <div>
       
     <h4>increment or decrement {num} </h4>
    <Button variant='outlined' onClick={Button1} style={{backgroundColor: 'snow'}}>increment!</Button><br/>
 <Button variant='outlined' onClick={Button2} style={{backgroundColor: 'snow'}}>decrement!</Button><br/>
  <Button variant='outlined' onClick={Button3} style={{backgroundColor: 'snow'}}>reset!</Button><br/>
    <Button variant='outlined' onClick={Button4} style={{backgroundColor: 'snow'}}>add 3</Button><br/>


    </div>
  )
}

export default Counter
