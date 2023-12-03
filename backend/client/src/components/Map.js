// Map.js
import React from 'react';

const Map = ({ isActive }) => (
  <div className={`map1 ${isActive ? 'active' : ''}`}>
    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"></iframe>
  </div>
);

export default Map;
