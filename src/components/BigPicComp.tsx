import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";

import reviews from '../reviews'


export default function BigPicComp() {
  const [reviewsToDisplay, setReviewsToDisplay] =  useState<review[]>([]);
  useEffect(() => {
    setReviewsToDisplay(reviews)
  }, []);


  return (
    <section className='big-pic-comp'>
      {reviewsToDisplay.length > 0 &&
        <>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {reviewsToDisplay.map((review: review) => (
              <SwiperSlide key={review.id} className="grid-item flex column align-center justify-center">
                <img src={review.profileImg} alt="profileImg" />
                <span>{review.name}</span>
                <span>{review.review}</span>
                <div className="star-rate">
                  {
                    Array.from({ length: review.star }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))
                  }

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      }
    </section >
  )
}
