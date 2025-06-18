import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
const Name = () => {
            
      var [name2,setName2] = useState(); 
const button1 = () => 
     setName2("blah1"); 
const button2 = () => 
     setName2("blah2"); 
const button3= () => 
     setName2("blah3"); 

useEffect(()=>{
     button1()
},[])
 return (
    <div>
         <h3>{name2}</h3>
          <Button
                             variant="contained"
                             color="primary"
                             onClick={button1 }
                             style={{ marginLeft: '10px' }}>
                           
                             react 
                           </Button> <br />
                             <Button
                             variant="contained"
                             color="primary"
                             onClick={button2 }
                             style={{ marginLeft: '10px' }}>
                           
                             react2 
                           </Button><br />
                             <Button
                             variant="contained"
                             color="primary"
                             onClick={button3 }
                             style={{ marginLeft: '10px' }}>
                           
                            react3 
                           </Button><br />

    </div>
  )
}

 export default Name