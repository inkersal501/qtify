import React from 'react';
import {Box, Grid   } from '@mui/material';  
import styles from './Card.module.css';

function Albumcard() {
  return ( 

    <Grid container spacing={2} sx={{backgroundColor: "#121212" }}>
        <Grid item xs={2} sx={{backgroundColor: "#121212" }}>
          
          <Box sx={{display:"flex",flexDirection:"column",gap:"0"}} className={styles.card}>
            <Box sx={{margin:"0",padding:"0"}} className={styles.cardContent}>
                  <img
                  src='https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800'
                  alt="Test"
                  className={styles.cardImg}
                  ></img>
            </Box>
            <Box className={styles.cardActions}>
              <button className={styles.cardButton}>100 Follows</button>
            </Box>
          </Box>

        </Grid>
         
      </Grid>

    

  )
}

export default Albumcard;