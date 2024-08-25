import React, {useState} from 'react';
import {Box, Typography  } from '@mui/material';  
import styles from './AlbumSection.module.css'; 
import AlbumGrid from './AlbumGrid'; 
import Carousel from './Carousel'; 

function AlbumSection({albumsList, albumTitle, songsSection=false, chipText}) {

  const [showAll, setshowAll]=useState(false);
  return ( 

    <Box sx={{backgroundColor: "#121212",padding:"20px" }}>
        
        <Box sx={{display:"flex",justifyContent:"space-between",padding:"0 30px",margin:"5px 0"}}>
            <Typography className={styles.albumTitle} variant='h6'>{albumTitle}</Typography>
            {
            !songsSection && (showAll ? 
            <button className={styles.actionBtn} onClick={()=>setshowAll(false)}>Collapse</button>
            :
            <button className={styles.actionBtn} onClick={()=>setshowAll(true)}>Show All</button>
            )}
        </Box>
        {showAll ? 
        <AlbumGrid albumsList={albumsList} chipText={chipText}/>
        :
        <Carousel albumsList={albumsList} chipText={chipText}/>
        }
    </Box>
    

  )
}

export default AlbumSection;