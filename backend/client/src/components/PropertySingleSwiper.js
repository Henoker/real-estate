import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const PropertySingleSwiper = ({property}) => {
 

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div id="property-single-carousel" className="swiper">
          <div className="swiper-wrapper">
            <Carousel data-bs-theme="dark">
             
                <Carousel.Item >
                  <img
                    className="d-block w-100 "
                    src={"http://localhost:8000"+property.cover_photo} // Use the image from the backend
                    alt= "slide1"
                 
                  />
                </Carousel.Item>
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={"http://localhost:8000"+property.photo1} // Use the image from the backend
                    alt= "slide2"
                    
                  />
                </Carousel.Item>
           
            </Carousel>
          </div>
        </div>
        <div className="property-single-carousel-pagination carousel-pagination" />
      </div>
    </div>
  );
};

export default PropertySingleSwiper;