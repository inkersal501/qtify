import React from 'react';
import {Box } from '@mui/material';  
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import Albumcard from './Albumcard'; 

function Carousel({albumsList, chipText, filter, filterKey}) {

  if(filter && filterKey!=='all'){
    albumsList= albumsList.filter(album => {
      return (album.genre.key===filterKey);
    })
  }

  return ( 
    <Box sx={{padding:"0 15px"}}>
        <Swiper 
          spaceBetween={0}
          slidesPerView={7}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper" 
        >
        {
        albumsList.map(album =>(

        <SwiperSlide key={album.id}>
            <Albumcard album={album} chipText={chipText}/>
        </SwiperSlide>   

        ))
        } 
        </Swiper>
    </Box>
  )
}

export default Carousel;