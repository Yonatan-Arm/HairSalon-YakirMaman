import React from "react";
import videsSrc from "../assets/imgs/yakir-video-haircut.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import "swiper/css";

export default function Gallary() {
  const slides:string[] = [
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/7.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/4.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/8.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/5.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/2.jpg",
    "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/1.jpg",
  ];

  return (
    <section className="gallary-section flex column align-center justify-center">
      <video autoPlay muted playsInline loop id="myVideo">
        <source src={videsSrc} type="video/mp4" />
      </video>
      <h1>Our Gallary </h1>
      <h2>
        <i> Enjoy Our Awesome Snapshot </i>
      </h2>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide}
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}
