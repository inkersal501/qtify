import React from 'react';
import {Box, Grid, Typography  } from '@mui/material';  
import styles from './AlbumSection.module.css';
import Albumcard from './Albumcard'; 

function AlbumSection({albumsList, albumTitle}) {
 
  return ( 

    <Box sx={{backgroundColor: "#121212",padding:"20px" }}>
        
        <Box sx={{display:"flex",justifyContent:"space-between",padding:"0 30px"}}>
        <Typography className={styles.albumTitle} variant='h6'>{albumTitle}</Typography>
            <button className={styles.actionBtn}>Collapse</button>
        </Box>
        <Grid container spacing={2} sx={{marginLeft:"0px"}}>
            {
            albumsList.map(album =>(

            <Grid item key={album.id}>
            <Albumcard album={album}/>
            </Grid>   

            ))
            }
                
        </Grid>
    </Box>
    

  )
}

export default AlbumSection;