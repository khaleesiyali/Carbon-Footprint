import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NonLoopCarousel({children}) {

    const settings3 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
  return (
    <>
    <Slider {...settings3}>
        {children}
    </Slider>
    </>
  )
}

export default NonLoopCarousel