import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';  
import Hero from './components/Hero';

import axios from 'axios';
import AlbumSection from './components/AlbumSection';

function App() {

  const [topalbumsList, settopalbumsList] = useState([{}]);
  const [newalbumsList, setnewalbumsList] = useState([{}]);
  const [loadAlbum, setloadAlbum] = useState(false);

  const getAlbums = async (type) =>{

    const apiUrl=`https://qtify-backend-labs.crio.do/albums/${type}`;
    const response = await axios.get(apiUrl)
    .then(response => {   
      return response.data;                     
    }).catch (error => {     
        if(error.response){           
          console.log('Something went wrong. Check that the backend is running, reachable and returns valid JSON.');
        }      
    }); 
    if(type=='top')
      settopalbumsList(response); 
    else
      setnewalbumsList(response);

  }
  useEffect(() =>{
     
    getAlbums("top"); 
    getAlbums("new");
    setTimeout(() => { 
      setloadAlbum(true);
    }, 500);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    
    <>
      <Navbar />
      <Hero />
      {loadAlbum && <AlbumSection albumsList={topalbumsList} albumTitle="Top Albums"/>}
      {loadAlbum && <AlbumSection albumsList={newalbumsList} albumTitle="New Albums"/>}
    </>
    
  );
}

export default App;
