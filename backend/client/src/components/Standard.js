// Standard.js
import React from 'react';

const Standard = ({ dataSelector, images, isActive }) => (
  <div className={`standard ${isActive ? 'active' : ''}`} data-selector={dataSelector}>
    <ul className="single_grid">
      {images.map((image, index) => (
        <li key={index}>
          <img src={image} className="img-responsive" alt="" />
        </li>
      ))}
      <div className="clearfix"> </div>
    </ul>
  </div>
);

export default Standard;
