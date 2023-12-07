import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPropertyBySlug, reset }from '../features/properties/propertySlice';
import {toast} from 'react-toastify';
import IntroSingle from "../components/IntroSingle"
import PropertySingleContainer from "../components/PropertySingleContainer"
import SpinnerComponent from '../components/SpinnerComponent';






const PropertyPage = () => {
  // const { property, isLoading, isError, message } = useSelector((state) => state.property);
  // const dispatch = useDispatch();
 

  // useEffect(() => {
  //   if(isError) {
  //     toast.error(message, {icon:"🤦‍♂️"})
  //   }
  //   dispatch(reset());
  //   dispatch(getPropertyBySlug());
  // }, [dispatch, isError, message]);

  // if (isLoading) {
  //   return <div><SpinnerComponent/></div>;
  // }

  

  return (
    <>
   <IntroSingle/>
   <PropertySingleContainer />
   
    
     

    </>
  )
}

export default PropertyPage