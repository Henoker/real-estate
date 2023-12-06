import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProperties, reset } from '../features/properties/propertySlice';
import {toast} from 'react-toastify';
import Property from '../components/Property';
import Title from '../components/Title';
import IntroSingle from '../components/IntroSingle';
import SpinnerComponent from '../components/SpinnerComponent';

const PropertiesPage = () => {
  const {properties, isLoading, isError, message} = useSelector((state)=> state.properties)

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError) {
      toast.error(message, {icon:"🤦‍♂️"})
    }
    dispatch(getProperties())
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <SpinnerComponent/>;
  }

  return (
    <> 
        <Title title="our properties catalog" />
        <IntroSingle/>
 
              <section className="property-grid grid">
              <div className="container">
                <div className="row">
                  {properties.map((property) => (
                    <div className="col-md-4">
                      <div className="card-box-a card-shadow">
                      <Property property={property} key={property.id} />
                      </div>
                    </div>
							    ))}
              </div>
              </div>
              </section>
    
    </>
  )
}

export default PropertiesPage