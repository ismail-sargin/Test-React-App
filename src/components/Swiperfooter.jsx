import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default function Swiperfooter() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="little-title">
              ASTERİA
              <br /> BODRUM RESORT
            </div>
            <img
              className="custom-slide"
              src={require('../assets/images/png/bodrum.png')}
            />
            <img
              className="img-fluid custom-arrow-2"
              src={require('../assets/images/png/arrow2.png')}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="little-title">
              ASTERİA
              <br /> KEMER RESORT
            </div>
            <img
              className="custom-slide"
              src={require('../assets/images/png/kemer.png')}
            />
            <img
              className="img-fluid custom-arrow-2"
              src={require('../assets/images/png/arrow2.png')}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="little-title">
              ASTERİA
              <br /> KREMLİN PALACE
            </div>
            <img
              className="custom-slide"
              src={require('../assets/images/png/kremlin.png')}
            />
            <img
              className="img-fluid custom-arrow-2"
              src={require('../assets/images/png/arrow2.png')}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="little-title">
              ASTERİA
              <br /> ZEUS DİDİM
            </div>
            <img
              className=" custom-slide"
              src={require('../assets/images/png/didim.png')}
            />
            <img
              className="img-fluid custom-arrow-2"
              src={require('../assets/images/png/arrow2.png')}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="little-title">
              ASTERİA
              <br /> VENUS DİDİM
            </div>
            <img
              className=" custom-slide"
              src={require('../assets/images/png/venus.png')}
            />
            <img
              className="img-fluid custom-arrow-2"
              src={require('../assets/images/png/arrow2.png')}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
