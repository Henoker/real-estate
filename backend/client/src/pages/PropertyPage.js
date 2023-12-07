import React, { useEffect } from 'react';
import { useGetPropertyDetailsQuery } from '../services/apiProperties';
import {toast} from 'react-toastify';
import IntroSingle from "../components/IntroSingle"
// import PropertySingleContainer from "../components/PropertySingleContainer"
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
    return <p>Error: {error.message}</p>;
  }
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
   <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      {/* Display other property details as needed */}
    </div>
   {/* <PropertySingleContainer /> */}
   
    
     

    </>
  )
}

export default PropertyPage