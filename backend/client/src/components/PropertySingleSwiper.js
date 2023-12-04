import '../../src/index.css';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/slide-1.jpg';
import pic2 from '../images/slide-2.jpg';
import pic3 from '../images/slide-3.jpg';

const PropertySingleSwiper = () => {
  return (
    <>
    <div className="row justify-content-center">
            <div className="col-lg-8">
            <div id="property-single-carousel" class="swiper">
              <div class="swiper-wrapper">
                <Carousel data-bs-theme="dark">
                  <Carousel.Item className='carousel-item-b swiper-slide '>
                    <img
                    className="carousel-item-a swiper-slide d-block w-100"
                    src={pic1}
                    alt="First slide"
                  />
                    {/* <Carousel.Caption>
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                    className="carousel-item-b swiper-slide d-block w-100"
                    src={pic2}
                    alt="Second slide"
                    />
                      {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>
                  <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                    />
                      {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="property-single-carousel-pagination carousel-pagination" />
    </div>
    </div>

      {/* <div className="row justify-content-center">
            <div className="col-lg-8">
                <div id="property-single-carousel" className="swiper">
                    <div className="swiper-wrapper">
                        <div className="carousel-item-b swiper-slide">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="carousel-item-b swiper-slide">
                            <img src={pic2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="property-single-carousel-pagination carousel-pagination" />
            </div>
      </div> */}
        
   
    </>
    

  

     
  )
}

export default PropertySingleSwiper