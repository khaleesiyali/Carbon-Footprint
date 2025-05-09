import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RightToLeftCarousel({children}) {

    const settings5 = {
      dots: true,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

  return (
    <>
    <Slider {...settings5}>
        {children}
    </Slider>
    </>
  )
}

export default RightToLeftCarousel