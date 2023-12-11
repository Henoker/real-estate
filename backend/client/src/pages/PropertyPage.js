import React from 'react';
import { useGetPropertyDetailsQuery } from '../services/apiProperties';
import {toast} from 'react-toastify';
import IntroSingle from "../components/IntroSingle"
import PropertySingleContainer from "../components/PropertySingleContainer"
import SpinnerComponent from '../components/SpinnerComponent';
import { useParams } from 'react-router-dom';






const PropertyPage = () => {
  const { slug } = useParams();
  console.log('Slug:', slug);
  const { data: property, error, isLoading } = useGetPropertyDetailsQuery(slug);

  if (isLoading) {
    return <p><SpinnerComponent /></p>;
  }

  if (error) {
    console.error(error);
    return toast.error(error.message, {icon:"🤦‍♂️"})
  }
 

  

  return (
    <>
   <IntroSingle property={property}/>
   <PropertySingleContainer property={property} />
   
    
     

    </>
  )
}

export default PropertyPage