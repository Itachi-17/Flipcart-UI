import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FeaturedBrands = () => {
  const brandSlides = [
    { image: "/Img/Featured_Brands_Img/feat_brand1.webp", alt: "Brand 1" },
    { image: "/Img/Featured_Brands_Img/feat_brand2.webp", alt: "Brand 2" },
    { image: "/Img/Featured_Brands_Img/feat_brand3.webp", alt: "Brand 3" },
    { image: "/Img/Featured_Brands_Img/feat_brand4.webp", alt: "Brand 4" },
    { image: "/Img/Featured_Brands_Img/feat_brand5.webp", alt: "Brand 5" },
    { image: "/Img/Featured_Brands_Img/feat_brand6.webp", alt: "Brand 6" },
    { image: "/Img/Featured_Brands_Img/feat_brand7.webp", alt: "Brand 7" },
    { image: "/Img/Featured_Brands_Img/feat_brand8.webp", alt: "Brand 8" },
    { image: "/Img/Featured_Brands_Img/feat_brand9.webp", alt: "Brand 9" },
  ];

  return (
    <>
      <style>
        {`
          .featured-brands-sec {
            width: 97%;
            margin: 4rem auto;
            padding:1rem;
          }
          .featured-brands-sec p {
            font-size: 2.7rem;
            font-weight:500;
          }
          .featuredBrandsSwiper {
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
          }
          .featuredBrandsSwiper .swiper-button-next,
          .featuredBrandsSwiper .swiper-button-prev {
            color: gray;
            background-color: white;
            height: 14rem;
            width: 8rem;
            transform: scale(0.5);
            top: 30%;
          }
          .featuredBrandsSwiper .swiper-button-next {
            right: -2rem;
            border-radius: 1rem 0 0 1rem;
          }
          .featuredBrandsSwiper .swiper-button-prev {
            left: -2rem;
            border-radius: 0 1rem 1rem 0;
          }
          .featuredBrandsSwiper .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .featuredBrandsSwiper img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        `}
      </style>
      <div className="featured-brands-sec">
        <p>Featured Brands</p>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="featuredBrandsSwiper"
        >
          {brandSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedBrands;
