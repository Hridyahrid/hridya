import React from 'react';
import { TextField, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Login = () => {
  return (
    <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
      <PersonIcon style={{ fontSize: 40, marginBottom: '10px' }} />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </div>
  );
};

export default Login;
