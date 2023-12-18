import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useGetPropertiesQuery } from '../services/apiProperties';
import {toast} from 'react-toastify';
import SpinnerComponent from '../components/SpinnerComponent';

import Title from '../components/Title';
import Services from '../components/Services';


const HomePage = () => {
  const {
    data: apiResponse,
    error,
    message,
    isLoading,
  } = useGetPropertiesQuery();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (isLoading) {
    return (
      <p>
        <SpinnerComponent />
      </p>
    );
  }

  if (error) {
    return toast.error(message, { icon: "🤦‍♂️" });
  }

  const randomSlides =
    apiResponse && apiResponse.results && Array.isArray(apiResponse.results)
      ? apiResponse.results
      : [];

  return (
    <>
      <Title />
  
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: "500px" }}

      >
       
        {randomSlides.map((property, idx) => (
          <Carousel.Item key={idx}>
               
            <div
              className="swiper-slide carousel-item-a intro-item bg-image"
              style={{
                backgroundImage: `url(${"http://localhost:8000"+property.cover_photo})`,
                height:"90vh"
              }}
            >
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                  {/* <div className='overlay overlay-a'/> */}
               <p className="intro-title-top">
                {property.city}, {property.country}
              </p>
              <h1 className="intro-title mb-4 text-bg-light ">
                <span className="color-b">{property.property_number} </span>{" "}
                {property.title}
              </h1>
              <p className="intro-subtitle intro-price">
                <a href="#!">
                  <span className='price-a'>
                    {property.advert_type} | ${property.final_property_price}
                  </span>
                </a>
              </p>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              

            
              
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Services />


           
    </>
  );
};

export default HomePage