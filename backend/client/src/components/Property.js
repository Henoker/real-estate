import React from "react";
import '../index.css';
import { Link } from "react-router-dom";


const Property = ({ property }) => {
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
 

	return (
				<>
				  <div className="img-box-a">
					<img
					  src={"http://localhost:8000"+property.cover_photo}
					  alt=""
					  className="img-a img-fluid"
					  style={{width: "100%"}}
					/>
				  </div>
				  <div className="card-overlay">
					<div className="card-overlay-a-content">
					  <div className="card-header-a">
						<h2 className="card-title-a">
						  <a href="#!">{property.title}</a>
						</h2>
					  </div>
					  <div className="card-body-a">
						<div className="price-box d-flex">
						  <span className="price-a">
							{property.advert_type} | ${numberWithCommas(Number(property.price))}
						  </span>
						</div>
						<Link to={`/property/${property.slug}`} className="link-a">
						  Click here to view
						  <span className="bi bi-chevron-right" />
						</Link>
					  </div>
					  <div className="card-footer-a">
						<ul className="card-info d-flex justify-content-around">
						  <li>
							<h4 className="card-info-title">Area</h4>
							<span>
							  {property.plot_area}m
							  <sup>2</sup>
							</span>
						  </li>
						  <li>
							<h4 className="card-info-title">Beds</h4>
							<span>{property.bedrooms}</span>
						  </li>
						  <li>
							<h4 className="card-info-title">Baths</h4>
							<span>{property.bathrooms}</span>
						  </li>
						  <li>
							<h4 className="card-info-title">Garages</h4>
							<span>{property.total_floors}</span>
						  </li>
						</ul>
					  </div>
					</div>
				  </div>
				</>

	);
};

export default Property;