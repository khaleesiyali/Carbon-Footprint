import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoPlayCarousel({children}) {

    const settings6 = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };

  return (
    <>
    <Slider {...settings6}>
        {children}
    </Slider>
    </>
  )
}

export default AutoPlayCarousel