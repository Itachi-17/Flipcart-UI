import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CustomSwiper = ({
  slides,
  slidesPerView = 1,
  spaceBetween = 30,
  autoplay = false,
  pagination = false,
  navigation = true,
  height = "30rem",
  className = "",
}) => {
  return (
    <>
      <style>
        {`
          .customSwiper {
            margin-top: 1.7rem;
            width: 97%;
            height: ${height};
            display: flex;
            align-items: center;
          }
          .customSwiper .swiper-button-next,
          .customSwiper .swiper-button-prev {
            color: gray;
            background-color: white;
            height: 14rem;
            width: 8rem;
            transform: scale(0.5);
            top: 30%;
          }
          .customSwiper .swiper-button-next {
            right: -2rem;
            border-radius: 1rem 0 0 1rem;
          }
          .customSwiper .swiper-button-prev {
            left: -2rem;
            border-radius: 0 1rem 1rem 0;
          }
          .customSwiper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position:center;
          }
          .customSwiper .swiper-pagination-bullet {
            background-color: #ffffff57;
            border: 1px solid white;
          }
          .customSwiper .swiper-pagination-bullet-active {
            background-color: #ffffff;
          }
        `}
      </style>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={slidesPerView === 1}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={
          pagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={navigation}
        modules={[Autoplay, Pagination, Navigation].filter((module) => module)}
        className={`customSwiper ${className}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSwiper;
