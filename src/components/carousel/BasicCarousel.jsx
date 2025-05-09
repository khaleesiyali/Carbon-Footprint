import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BasicCarousel({children}) {
    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <>
    <Slider {...settings1}>
        {children}
    </Slider>
    </>

  )
}

export default BasicCarousel