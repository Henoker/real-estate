import '../../src/index.css';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';

const PropertySingleSwiper = () => {
  const { property } = useSelector((state) => state.properties);
  return (
    <>
    <div className="row justify-content-center">
            <div className="col-lg-8">
            <div id="property-single-carousel" class="swiper">
              <div class="swiper-wrapper">
              <Carousel data-bs-theme="dark">
                {property.images.map((image, index) => (
                  <Carousel.Item key={index} className="carousel-item-b swiper-slide">
                    <img
                      className="carousel-item-a swiper-slide d-block w-100"
                      src={image} // Use the image from the backend
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              </div>
            </div> 
            <div className="property-single-carousel-pagination carousel-pagination" />
     </div>
    </div>


        
   
    </>
    

  

     
  )
}

export default PropertySingleSwiper