import React from 'react'
import PropertySingleSwiper from './PropertySingleSwiper'
import PropertyDescription from './PropertyDescription'

const PropertySingleContainer = () => {
  return (
    <section className="property-single nav-arrow-b">
        <div className="container">
            <PropertySingleSwiper/>
            <PropertyDescription/>
        </div>
    </section>
  )
}

export default PropertySingleContainer