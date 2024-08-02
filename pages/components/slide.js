import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='images/banner.png' alt='Hixpress Banner' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='images/banner.png' alt='Hixpress Banner' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='images/banner.png' alt='Hixpress Banner' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
