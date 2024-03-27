import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/header-banner.css'

export function HeaderBanner() {
    return (
        <div className='wd-header-banner-swiper'>
            <Swiper
                className='mySwiper'
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 55555</SwiperSlide>
            </Swiper>
        </div>
    );
}
