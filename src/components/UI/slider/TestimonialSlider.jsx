import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Shopping Exchange is a game changer for anyone who wants to save money on their online purchases.
           I've been using it for a few months now and have saved hundreds of shillings on my shopping. 
           The user interface is easy to navigate and the product selection is vast. 
           I highly recommend Shopping Exchange to anyone looking to save money on their online shopping."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Stivo Simpleboy</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I recently discovered Shopping Exchange and it has completely changed the way I shop online. 
          I've been able to find some amazing deals that I wouldn't have found otherwise. The app is easy to use and the selection of products is impressive. 
          I highly recommend Shopping Exchange to anyone who wants to make the most of their online shopping experience."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Ivanka Nabii</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I am so impressed with Shopping Exchange. The app has made online shopping a breeze. 
          I love being able to compare prices from different e-commerce sites all in one place and the deals I've found have been unbeatable. 
          The app is user-friendly, easy to navigate and the selection of products is vast. I highly recommend Shopping Exchange to anyone who wants to make their online shopping experience 
          more efficient and enjoyable."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Kabahanye Kinuthia</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;