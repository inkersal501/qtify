import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';  
import Hero from './components/Hero';

import axios from 'axios';
import AlbumSection from './components/AlbumSection';

function App() {

  const [albumsList, setalbumsList] = useState([{}]);
  const [loadAlbum, setloadAlbum] = useState(false);

  const getAlbums = async () =>{

    const apiUrl=`https://qtify-backend-labs.crio.do/albums/top`;
    const response = await axios.get(apiUrl)
    .then(response => {   
      return response.data;                     
    }).catch (error => {     
        if(error.response){           
          console.log('Something went wrong. Check that the backend is running, reachable and returns valid JSON.');
        }      
    });
    setalbumsList(response);
    return response;
  }
  useEffect(() =>{
    getAlbums(); 
    setTimeout(() => {
      setloadAlbum(true);
    }, 500);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    
    <>
      <Navbar />
      <Hero />
      {loadAlbum && <AlbumSection albumsList={albumsList} albumTitle="Top Albums"/>}
    </>
    
  );
}

export default App;
