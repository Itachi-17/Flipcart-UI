import React from "react";
import CustomSwiper from "./CustomSwiper";

const Carousel = () => {
  const carouselSlides = [
    { image: "/Img/Carousel_Img/swiperImg1.png", alt: "Image 1" },
    { image: "/Img/Carousel_Img/swiperImg2.png", alt: "Image 2" },
    { image: "/Img/Carousel_Img/swiperImg3.png", alt: "Image 3" },
    { image: "/Img/Carousel_Img/swiperImg4.png", alt: "Image 4" },
    { image: "/Img/Carousel_Img/swiperImg5.png", alt: "Image 5" },
    { image: "/Img/Carousel_Img/swiperImg6.png", alt: "Image 6" },
  ];

  return (
    <CustomSwiper
      slides={carouselSlides}
      autoplay={true}
      pagination={true}
      navigation={true}
      className="myCustomSwiper"
      height="27rem"
    />
  );
};

export default Carousel;
