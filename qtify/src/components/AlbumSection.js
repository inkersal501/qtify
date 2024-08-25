import React, {useState} from 'react';
import { Box, Typography, Tab  } from '@mui/material';  
import { TabList, TabContext, TabPanel} from '@mui/lab'; 
import styles from './AlbumSection.module.css'; 
import AlbumGrid from './AlbumGrid'; 
import Carousel from './Carousel';  

function AlbumSection({albumsList, albumTitle, songsSection=false, chipText, genresList=[{}]}) {
 
  const [showAll, setshowAll] = useState(false); 
  const [activeTab, setactiveTab] = useState("all"); 

  const handleTabChange = (event, value) => {
    setactiveTab(value);
  };
 
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
        <Box sx={{padding:"0 30px",margin:"5px 0"}}>
          
          {songsSection ? 
            
              <TabContext value={activeTab}>
                <TabList onChange={handleTabChange} TabIndicatorProps={{ style: { display: 'none' } }}>
                  <Tab key="allTab" label="All" value="all" className={activeTab==="all"?styles.activeTab:styles.tab} /> 
                  {
                  genresList.map(genre =>(
                    <Tab key={genre.label+"Tab"} label={genre.label} value={genre.key} className={activeTab===genre.key?styles.activeTab:styles.tab} /> 
                  ))
                  }
                </TabList> 
    
                <TabPanel key="allPanel" value="all"><Carousel albumsList={albumsList} chipText={chipText} tab="all" /></TabPanel>
                {
                  genresList.map(genre =>(
                    <TabPanel key={genre.key+"Panel"} value={genre.key}>
                      <Carousel albumsList={albumsList} chipText={chipText} filter={true} filterKey={genre.key}/>
                    </TabPanel>
                  ))
                }
                
              </TabContext>            
            :<Carousel albumsList={albumsList} chipText={chipText} /> }          
        </Box>
        
      }
    </Box>
    

  )
}

export default AlbumSection;