import BasicCarousel from "../../components/carousel/BasicCarousel"
import CaptionCarousel from "../../components/carousel/CaptionCarousel";
import LoopCarousel from "../../components/carousel/LoopCarousel";
import NonLoopCarousel from "../../components/carousel/NonLoopCarousel";
import LazyLoadCarousel from "../../components/carousel/LazyLoadCarousel";
import RightToLeftCarousel from "../../components/carousel/RightToLeftCarousel";
import AutoPlayCarousel from "../../components/carousel/AutoPlayCarousel";


function Carousel() {

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Carousel
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Carousel</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Carousel</h4>
              <BasicCarousel>
                <div>
                  <img src="/images/carousel/banner_1.jpg" alt="carousel item" className="img-fluid" />
                </div>
                <div>
                  <img src="/images/carousel/banner_2.jpg" alt="carousel item" className="img-fluid" />
                </div>
                <div>
                  <img src="/images/carousel/banner_12.jpg" alt="carousel item" className="img-fluid" />
                </div>
              </BasicCarousel>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body"> 
                <h4 className="card-title">Carousel with captions</h4>
                <CaptionCarousel>
                  <div>
                      <img src="/images/carousel/banner_4.jpg" alt="carousel item" className="img-fluid"/>
                      <div className="card-img-overlay d-flex">
                          <div className="mt-auto text-center w-100">
                              <h3>First Slide Label</h3>
                              <h6 className="card-text mb-4 fw-normal">Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
                          </div>
                      </div>
                  </div>
                  <div>
                      <img src="/images/carousel/banner_5.jpg" alt="carousel item" className="img-fluid"/>
                      <div className="card-img-overlay d-flex">
                          <div className="mt-auto text-center w-100">
                              <h3>Second Slide Label</h3>
                              <h6 className="card-text mb-4 fw-normal">Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
                          </div>
                      </div>
                  </div>
                  <div>
                      <img src="/images/carousel/banner_6.jpg" alt="carousel item" className="img-fluid"/>
                      <div className="card-img-overlay d-flex">
                          <div className="mt-auto text-center w-100">
                              <h3>Third Slide Label</h3>
                              <h6 className="card-text mb-4 fw-normal">Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
                          </div>
                      </div>
                  </div>
                </CaptionCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="row grid-margin">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Loop</h4>
              <LoopCarousel>
                <div>
                  <img src="/images/carousel/banner_7.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_8.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_9.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_10.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_11.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_12.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_2.jpg" alt="carousel item" className="img-fluid"/>
                </div>
              </LoopCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">non-Loop</h4>
              <NonLoopCarousel>
                <div>
                    <img src="/images/carousel/banner_3.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src="/images/carousel/banner_4.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src="/images/carousel/banner_5.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src="/images/carousel/banner_6.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src="/images/carousel/banner_7.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src="/images/carousel/banner_8.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
                  <div>
                    <img src="/images/carousel/banner_9.jpg" alt="carousel item" className="img-fluid"/>
                  </div>
              </NonLoopCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Lazy load</h4>
              <LazyLoadCarousel>
                <div>
                  <img src="/images/carousel/banner_7.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_8.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_9.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_10.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_11.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_12.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_2.jpg" alt="carousel item" className="img-fluid"/>
                </div>
              </LazyLoadCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Right to left</h4>
              <RightToLeftCarousel>
                <div>
                  <img src="/images/carousel/banner_3.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_4.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_5.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_6.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_7.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_8.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_9.jpg" alt="carousel item" className="img-fluid"/>
                </div>
              </RightToLeftCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Auto Play</h4>
              <AutoPlayCarousel>
                <div>
                  <img src="/images/carousel/banner_7.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_8.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_9.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_10.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_11.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_12.jpg" alt="carousel item" className="img-fluid"/>
                </div>
                <div>
                  <img src="/images/carousel/banner_2.jpg" alt="carousel item" className="img-fluid"/>
                </div>
              </AutoPlayCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel