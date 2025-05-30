import {useState} from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    id: 1,
    src: "/images/samples/1280x768/1.jpg",
    width: 4,
    height: 3
  },
  {
    id: 2,
    src: "/images/samples/1280x768/2.jpg",
    width: 1,
    height: 1
  },
  {
    id: 3,
    src: "/images/samples/1280x768/3.jpg",
    width: 3,
    height: 4
  },
  {
    id: 4,
    src: "/images/samples/1280x768/4.jpg",
    width: 3,
    height: 4
  },
  {
    id: 5,
    src: "/images/samples/1280x768/5.jpg",
    width: 3,
    height: 4
  },
  {
    id: 6,
    src: "/images/samples/1280x768/6.jpg",
    width: 4,
    height: 3
  },
  {
    id: 7,
    src: "/images/samples/1280x768/7.jpg",
    width: 3,
    height: 4
  },
  {
    id: 8,
    src: "/images/samples/1280x768/8.jpg",
    width: 4,
    height: 3
  },
  {
    id: 9,
    src: "/images/samples/1280x768/9.jpg",
    width: 4,
    height: 3
  },
  {
    id: 10,
    src: "/images/samples/1280x768/10.jpg",
    width: 3,
    height: 4
  },
  {
    id: 11,
    src: "/images/samples/1280x768/11.jpg",
    width: 4,
    height: 3
  },
  {
    id: 12,
    src: "/images/samples/1280x768/12.jpg",
    width: 3,
    height: 4
  },
  {
    id: 13,
    src: "/images/samples/1280x768/13.jpg",
    width: 4,
    height: 3
  },
  {
    id: 14,
    src: "/images/samples/1280x768/14.jpg",
    width: 3,
    height: 4
  },
  {
    id: 15,
    src: "/images/samples/1280x768/15.jpg",
    width: 4,
    height: 3
  }
  ];

function Gallery() {

  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openLightBox = (index) => {
    setIndex(index)
    setIsOpen(true)
  }

  const closeLightBox = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Gallery </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
            <li className="breadcrumb-item active" aria-current="page">Gallery</li>
          </ol>
        </nav>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">light Gallery</h4>
              <p className="card-text"> Click on any image to open in lightbox gallery </p>
                 <PhotoAlbum layout='rows' photos={photos} onClick={({index}) => openLightBox(index)}/> 
            </div>
          </div>
        </div>
      </div>
      <Lightbox 
        open={isOpen}
        close={() => closeLightBox}
        slides={photos.map(image => ({src: image.src}))}
        index={index}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}

export default Gallery