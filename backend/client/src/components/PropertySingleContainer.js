import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties, reset } from '../features/properties/propertySlice';
import PropertySingleSwiper from './PropertySingleSwiper';
import PropertyDescription from './PropertyDescription';
import { useParams } from 'react-router-dom';

const PropertySingleContainer = ({property}) => {
  // const { properties, isLoading, isError, message } = useSelector((state) => state.properties);
  // const dispatch = useDispatch();
  // const { slug } = useParams();

  // useEffect(() => {
  //   dispatch(reset());
  //   dispatch(getProperties());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error: {message}</div>;
  // }

  // const currentProperty = properties.find((p) => p.slug === slug);

  // if (!currentProperty) {
  //   return <div>Property not found</div>;
  // }

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
