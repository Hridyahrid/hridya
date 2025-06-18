import React, { useState } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid, { gridClasses } from '@mui/material/Grid';
const Product = () => {

  const [user, SetUser] = useState([]);

  axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      SetUser(res.data);
      console.log(user);
    });

  return (
    <div>
         <Grid container spacing={2}>
      {user.map((val) => {
        return (
           <Grid item xs={12} sm={6} md={4} lb={3}>
          <Card sx={{ maxWidth: 345 }} key={val.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={val.image}
              title={val.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.category}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {val.describtion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        
        </Grid>
        )
      })}
      </Grid>
    </div>
  );
};

export default Product;
