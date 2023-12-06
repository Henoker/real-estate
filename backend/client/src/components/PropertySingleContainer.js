import React from 'react';
import { useSelector } from 'react-redux';
import PropertySingleSwiper from './PropertySingleSwiper'
import PropertyDescription from './PropertyDescription'


const PropertySingleContainer = () => {
  const property = useSelector((state) => state.properties.property)


  return (
    <section className="property-single nav-arrow-b">
      <div className="container">
        <PropertySingleSwiper property={property} />
        <PropertyDescription property={property} />
      </div>
    </section>
  )
}

export default PropertySingleContainer