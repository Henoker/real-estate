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
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "500px" }}>
        {randomSlides.map((property, idx) => (
          <Carousel.Item key={idx}>
            <div className="overlay overlay-a" />
            <img
              className="d-block w-100"
              src={`http://localhost:8000${property.cover_photo}`}
              alt="First slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              
              <p>
                {property.city}, {property.country}
              </p>
              <h1
                style={{
                  color: "white",
                  position: "relative",
                  marginTop: "0px",
                }}
              >
                <span className="color-b">{property.property_number} </span>{" "}
                {property.title}
              </h1>
              <p className="">
                <a href="#!">
                  <span className="price-a">
                    {property.advert_type} | ${property.final_property_price}
                  </span>
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Services />
    </>
  );
};

export default HomePage