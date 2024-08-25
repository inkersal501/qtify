import React from 'react';
import { Grid } from '@mui/material';  
import Albumcard from './Albumcard'; 

function AlbumGrid({albumsList, chipText}) {
 
  return ( 
  
        <Grid container spacing={2} sx={{marginLeft:"0px"}}>
            {
            albumsList.map(album =>(

            <Grid item key={album.id}>
              <Albumcard album={album} chipText={chipText}/>
            </Grid>   

            ))
            }
                
        </Grid>
    
  )
}

export default AlbumGrid;