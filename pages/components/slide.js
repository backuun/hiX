import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slide() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`/api/banner`);
        const data = await response.json();
        if (data && data.data) {
          setBanners(data.data);
        } else {
          console.error('Invalid response data format:', data);
        }
    };
  
    fetchData();
  }, []);

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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
              <img src={`https://prahwa.net/storage/${banner.image}`} alt='Hixpress Banner' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
