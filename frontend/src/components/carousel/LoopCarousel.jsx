import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LoopCarousel({children}) {
    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

  return (
    <>
    <Slider {...settings2}>
        {children}
    </Slider>
    </>
  )
}

export default LoopCarousel