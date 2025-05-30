import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LazyLoadCarousel({children}) {

    const settings4 = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

  return (
    <>
    <Slider {...settings4}>
        {children}
    </Slider>
    </>
  )
}

export default LazyLoadCarousel