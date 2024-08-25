import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';  
import Hero from './components/Hero';
import axios from 'axios';
import AlbumSection from './components/AlbumSection'; 

function App() {

  const [topalbumsList, settopalbumsList] = useState([{}]);
  const [newalbumsList, setnewalbumsList] = useState([{}]);
  const [songsList, setsongsList] = useState([{}]);
  const [Genres, setGenres] = useState([{}]);
  const [loadAlbum, setloadAlbum] = useState(false); 

  const getAlbums = async (type) =>{

    let apiUrl=`https://qtify-backend-labs.crio.do/albums/${type}`;
    if(type==='top')
      apiUrl = 'https://qtify-backend-labs.crio.do/albums/top'; 
    else if(type==='new')
      apiUrl = 'https://qtify-backend-labs.crio.do/albums/new'; 
    else if(type==='songs')
      apiUrl = 'https://qtify-backend-labs.crio.do/songs'; 

    const response = await axios.get(apiUrl)
    .then(response => {   
      return response.data;                     
    }).catch (error => {     
        if(error.response){           
          console.log('Something went wrong. Check that the backend is running, reachable and returns valid JSON.');
        }      
    });  
    
    if(type==='top')
      settopalbumsList(response); 
    else if(type==='new')
      setnewalbumsList(response);
    else if(type==='songs')
      setsongsList(response);

  }

  const getGenres = async () =>{

    const response = await axios.get(`https://qtify-backend-labs.crio.do/genres`)
    .then(response => {   
      return response.data;                     
    }).catch (error => {     
      if(error.response){           
        console.log('Something went wrong. Check that the backend is running, reachable and returns valid JSON.');
      }      
    });   
    setGenres(response.data);  
  }

  useEffect(() =>{
     
    getAlbums("top"); 
    getAlbums("new");
    getGenres();   
    getAlbums("songs");    
    setTimeout(() => { 
      setloadAlbum(true);
    }, 500); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    
    <>
      <Navbar />
      <Hero />
      

      {loadAlbum && <AlbumSection albumsList={topalbumsList} albumTitle="Top Albums" songsSection={false} chipText="follows"/>}    
      {loadAlbum && <AlbumSection albumsList={newalbumsList} albumTitle="New Albums" songsSection={false} chipText="follows"/>}
      {loadAlbum && <AlbumSection albumsList={songsList} albumTitle="Songs" songsSection={true} chipText="likes" genresList={Genres}/>}
 
    </>
    
  );
}

export default App;
