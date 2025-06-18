import { AppBar,Button, Typography,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:""}}>
            <Toolbar>

<Typography variant='h6'> MY APP </Typography>
<Link to="/">&nbsp;
<Button variant='contained' color='secondary'>LOGIN</Button>
</Link> &nbsp;
<Link to="/sign">
<Button variant='contained' color='secondary'>SIGNUP</Button>
</Link>&nbsp;
<Link to="/state">
<Button variant='contained' color='secondary'>STATE</Button>
</Link>&nbsp;
<Link to="/counter">
<Button variant='contained' color='secondary'>counter</Button>
</Link> &nbsp;
<Link to="/name">
<Button variant='contained' color='secondary'>name</Button>
</Link>  &nbsp;
<Link to="/user">
<Button variant='contained' color='secondary'>name</Button>
</Link>  &nbsp;
<Link to="/product">
<Button variant='contained' color='secondary'>product</Button>
</Link>  &nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar