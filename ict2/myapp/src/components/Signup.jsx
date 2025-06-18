import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const Signup = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto',
        gap: 2,
        mt: 5,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" variant="outlined" />
      <TextField label="Age" variant="filled" />
      <TextField label="Password" type="password" variant="outlined" />
      <TextField label="Email" type="email" variant="filled" />
      <Button variant="contained" color="primary">Signup</Button>
    </Box>
  );
};

export default Signup;
