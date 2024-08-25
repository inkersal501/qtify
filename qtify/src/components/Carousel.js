import React from 'react';
import {Box } from '@mui/material';  
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import Albumcard from './Albumcard'; 

function Carousel({albumsList}) {
 
  return ( 
    <Box sx={{padding:"0 15px"}}>
        <Swiper 
        spaceBetween={0}
        slidesPerView={7}
        navigation={true}
        modules={[Navigation]}
         className="mySwiper"
        //onSlideChange={() => /*console.log('slide change')*/ }
        //onSwiper={(swiper) =>  /*console.log(swiper)*/}
        >
        {
        albumsList.map(album =>(

        <SwiperSlide key={album.id}>
            <Albumcard album={album}/>
        </SwiperSlide>   

        ))
        } 
        </Swiper>
    </Box>
  )
}

export default Carousel;