import React from 'react'
import ContactAgent from './ContactAgent'
import { useSelector } from 'react-redux';

const PropertyDescription = ({ property}) => {
    if (!property) {
        return null; // Handle case where property is not available yet
      }
    
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
                                        <span>{property.id}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Location:</strong>
                                        <span>{property.location}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <strong>Property Type:</strong>
                                        <span>{property.PropertyType}</span>
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
                                    {/* <li className="d-flex justify-content-between">
                                        <strong>Garage:</strong>
                                        <span>1</span>
                                    </li> */}
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
                        {/* <p className="description color-text-a no-margin">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                        sem. Donec rutrum congue leo eget malesuada. Quisque velit
                        nisi, pretium ut lacinia in, elementum id enim. Donec
                        sollicitudin molestie malesuada.
                        </p> */}
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
                            <li>Balcony</li>
                            <li>Outdoor Kitchen</li>
                            <li>Cable Tv</li>
                            <li>Deck</li>
                            <li>Tennis Courts</li>
                            <li>Internet</li>
                            <li>Parking</li>
                            <li>Sun Room</li>
                            <li>Concrete Flooring</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            {/* tab for video floor plan and ubication */}
            {/* <div className="col-md-10 offset-md-1">
            <ul
            className="nav nav-pills-a nav-pills mb-3 section-t3"
            id="pills-tab"
            role="tablist"
            >
                <li className="nav-item">
                    <a
                    className="nav-link active"
                    id="pills-video-tab"
                    data-bs-toggle="pill"
                    href="#pills-video"
                    role="tab"
                    aria-controls="pills-video"
                    aria-selected="true"
                    >
                        Video
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    className="nav-link"
                    id="pills-plans-tab"
                    data-bs-toggle="pill"
                    href="#pills-plans"
                    role="tab"
                    aria-controls="pills-plans"
                    aria-selected="false"
                    >
                        Floor Plans
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    className="nav-link"
                    id="pills-map-tab"
                    data-bs-toggle="pill"
                    href="#pills-map"
                    role="tab"
                    aria-controls="pills-map"
                    aria-selected="false"
                    >
                        Ubication
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
              className="tab-pane fade show active"
              id="pills-video"
              role="tabpanel"
              aria-labelledby="pills-video-tab"
              >
                <iframe
                src="https://player.vimeo.com/video/73221098"
                width="100%"
                height={460}
                frameBorder={0}
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowFullScreen=""
                title='iframe'
              />
            </div>
            <div
              className="tab-pane fade"
              id="pills-plans"
              role="tabpanel"
              aria-labelledby="pills-plans-tab"
            >
              <img src="assets/img/plan2.jpg" alt="" className="img-fluid" />
            </div>
            <div
              className="tab-pane fade"
              id="pills-map"
              role="tabpanel"
              aria-labelledby="pills-map-tab"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                width="100%"
                height={460}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                title='iframe'
              />
            </div>
         </div>
            </div> */}
            {/* Contact agent component */}
            <ContactAgent />
    </div>
  )
}

export default PropertyDescription