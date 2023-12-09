import React from 'react';
import { useGetPropertiesQuery } from '../services/apiProperties';
import {toast} from 'react-toastify';
import Property from '../components/Property';
import Title from '../components/Title';
import IntroSingle from '../components/IntroSingle';
import SpinnerComponent from '../components/SpinnerComponent';

const PropertiesPage = () => {
  const { data: apiResponse, error, message, isLoading } = useGetPropertiesQuery();

  if (isLoading) {
    return <p><SpinnerComponent/></p>;
  }

  if (error) {
    return toast.error(message, {icon:"🤦‍♂️"});
  }
 
  const properties = apiResponse && apiResponse.results && Array.isArray(apiResponse.results)
    ? apiResponse.results
    : [];
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