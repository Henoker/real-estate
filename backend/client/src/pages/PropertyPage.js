import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPropertyBySlug, reset } from '../features/properties/propertySlice';
import {toast} from 'react-toastify';
import IntroSingle from "../components/IntroSingle"
import PropertySingleContainer from "../components/PropertySingleContainer"
import SpinnerComponent from '../components/SpinnerComponent';





const PropertyPage = ({params }) => {
  const { property, isLoading, isError, message } = useSelector((state) => state.properties);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params && params.slug) {
      const propertySlug = params.slug;
      dispatch(getPropertyBySlug(propertySlug));
    }
  }, [dispatch, params]);

  console.log('Redux state:', useSelector((state) => state.properties));
  console.log('Property:', property);

  if (isLoading) {
    return <SpinnerComponent/>;
  }

  if (isError) {
    toast.error(message, {icon:"🤦‍♂️"})
    }




  return (
    <>
   <IntroSingle/>
   <PropertySingleContainer property={property} />
   
    
     

    </>
  )
}

export default PropertyPage