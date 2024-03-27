import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/header-banner.css'
import SwiperCore, { Autoplay } from 'swiper';


SwiperCore.use([Autoplay]);
function HeaderBannder() {
    return (
        <div className='wd-header-banner-swiper'>
            <Swiper
                pagination={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 1000 }}
                modules={[Navigation, Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </div>
    );
}
export { HeaderBannder };