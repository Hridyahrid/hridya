import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const StateBasics = () => {
  const [name, setName] = useState('');       
  const [name2, setName2] = useState('');     

  const inputHandler = (e) => {
    setName(e.target.value); 
  };

  const handleClick = () => {
    setName2(name); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        variant="outlined"
        label="Enter your name"
        onChange={inputHandler}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginLeft: '10px' }}
      >
        Submit
      </Button>

      {name2 && <h3>Welcome {name2}</h3>}
    </div>
  );
};

export default StateBasics;
