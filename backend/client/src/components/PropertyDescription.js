import React from 'react';
import { useSelector } from "react-redux";
import ContactAgent from './ContactAgent';
import PropertyTabs from './PropertyTabs';
;


const PropertyDescription = ({property}) => {

	const { user } = useSelector((state) => state.auth);
   
  return (
    <div className="row">
            <div className="col-sm-12">
                <div className="row justify-content-between">
                    <div className="col-md-5 col-lg-4">
                        <div className="property-price d-flex justify-content-center foo">
                            <div className="card-header-c d-flex">
                                <div className="card-box-ico">
                                    <span className="bi bi-cash">$</span>
                                </div>
                                <div className="card-title-c align-self-center">
                                    <h5 className="title-c">{property.price}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="property-summary">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="title-box-d section-t4">
                                        <h3 className="title-d">Quick Summary</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="summary-list">
                                <ul className="list">
                                    <li className="d-flex justify-content-between">
                                        <strong>Property ID:</strong>
                                        <span>{property.ref_code}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Location:</strong>
                                        <span>{property.street_address}, {property.city}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Property Type:</strong>
                                        <span>{property.property_type}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Status:</strong>
                                        <span>{property.advert_type}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Area:</strong>
                                        <span>
                                        {property.plot_area}
                                            <sup>2</sup>
                                        </span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Beds:</strong>
                                        <span>{property.bedrooms}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Baths:</strong>
                                        <span>{property.bathrooms}</span>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-7 section-md-t3">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box-d">
                                    <h3 className="title-d">Property Description</h3>
                                </div>
                            </div>
                        </div>
                        <div className="property-description">
                            <p className="description color-text-a">
                            {property.description}
                        </p>
                        </div>
                    <div className="row section-t3">
                        <div className="col-sm-12">
                            <div className="title-box-d">
                                <h3 className="title-d">Amenities</h3>
                            </div>
                        </div>
                    </div>
                    <div className="amenities-list color-text-a">
                        <ul className="list-a no-margin">
                        {property.amenities && property.amenities.length > 0 ? (
                            property.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))
                        ) : (
                                <li></li>
                        )}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        <ContactAgent/> <PropertyTabs />
          
            {/* Contact agent component */}
       
    </div>
  )
}

export default PropertyDescription