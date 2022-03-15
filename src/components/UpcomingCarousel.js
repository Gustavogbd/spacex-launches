import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";


function UpcomingCarousel() {

    const [launches, setLaunches] = useState([])
    const [error, setError] = useState('')
    const axios = require('axios');
    console.log(launches);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches/upcoming').then(response => {
        setLaunches(response.data)
        }).catch(error => {
        console.log(error)
        setError(error)
        });
    },[])

  return (
    <div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {launches?.map((launches, i) => (
          <SwiperSlide>
            <div className="cards">
              <img src={launches.links.patch.small}/>
              <p className="titulo">{i + 1} - {launches.name}</p>
              <p className="detalhes">{launches.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default UpcomingCarousel;