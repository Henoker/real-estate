import React from 'react';
import PropertySingleSwiper from './PropertySingleSwiper';
import PropertyDescription from './PropertyDescription';


const PropertySingleContainer = ({property}) => {
  

  return (
    <section className="property-single nav-arrow-b">
      <div className="container">
        <PropertySingleSwiper property={property}  />
        <PropertyDescription property={property}  />
      </div>
    </section>
  );
};

export default PropertySingleContainer;
