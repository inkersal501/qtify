import React from 'react';
import {Box, Chip, Typography  } from '@mui/material';  
import styles from './Card.module.css';

function Albumcard({album, chipText}) { 
 
  return ( 
 
      <Box sx={{display:"flex",flexDirection:"column",gap:"0"}} className={styles.Albumcard}>
        <Box sx={{display:"flex",flexDirection:"column",gap:"0"}} className={styles.card}>
          <Box sx={{margin:"0",padding:"0"}} className={styles.cardContent}>
                <img
                src={album.image}
                alt={album.title}
                className={styles.cardImg}
                ></img>
          </Box>
          <Box className={styles.cardActions}>
            <Chip label={album[chipText]+" "+chipText} className={styles.cardButton}/> 
          </Box>
        </Box>
        <Typography className={styles.cardFooterText} variant='p'>{album.title}</Typography>
      </Box>
  
  )
}

export default Albumcard;