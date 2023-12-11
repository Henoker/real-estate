import React from 'react'
import { Link } from 'react-router-dom'


const IntroSingle = ({property}) => {
  if (!property) {
    return null; 
  }
  return (
    <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">{property.street_address}</h1>
            <span className="color-text-a">{property.city}, {property.country}</span>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-box d-flex justify-content-lg-end"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/properties">Properties</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {property.slug}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IntroSingle