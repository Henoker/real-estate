import React from "react";
import '../index.css';
// import { Badge, Button, Card, Col, Row } from "react-bootstrap";
// import { FaBed, FaShower } from "react-icons/fa";
// import { GiStairs } from "react-icons/gi";
import { Link } from "react-router-dom";
// import cover_photo from '../images/house_sample_VY1oSqz.jpg'

const Property = ({ property }) => {
	// function numberWithCommas(x) {
	// 	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	// }
 

	return (
		// <section className="property-grid grid">
		// <div className="container">
		//   <div className="row">
			// {property && property.length > 0 &&
			//   <div className="col-md-4">
				 /* Assuming propertyData is an array with at least one property object */ 
				// <div className="card-box-a card-shadow">
				<>
				  <div className="img-box-a">
					<img
					  src={"http://localhost:8000"+property.cover_photo}
					  alt=""
					  className="img-a img-fluid"
					  style={{objectFit: "cover"}}
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
							{property.advert_type} | $ {property.price}
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
			   /* </div>
		 }
		  </div> */
		
		// </div>
	//   </section>
		// <Card >
		// 	<Badge
		// 		bg="success"
		// 		className="position-absolute top-0 start-100 translate-middle rounded-pill"
		// 	>
		// 		{property.advert_type}
		// 	</Badge>
		//     <Link to={`/property/${property.slug}`}>
		// 	 <Card.Img variant="top" src={"http://localhost:8000"+property.cover_photo}  
		// 	 style={{
        //     height: 260,
        //     width: '100%',
        //   }}  />
		// 	 </Link>
		// 	{/* <Link to={`/property/${property.slug}`}>
			  
        //         {/* <Card.Img src={cover_photo} alt="image" variant="top" /> 
		// 	</Link> */}
		// 	<Card.Title className="property-price">
		// 		${numberWithCommas(Number(property.price))}
		// 	</Card.Title>
		// 	<Card.Body>
		// 		<Card.Title as="h4">
		// 			<strong>{property.title}</strong>
		// 		</Card.Title>

		// 		<Card.Text as="p">
		// 			{property.description.substring(0, 70)}...
		// 		</Card.Text>
		// 		<hr />
		// 		<Row>
		// 			<Col className="d-flex justify-content-between">
		// 				<span>
		// 					<FaBed /> {property.bedrooms}
		// 				</span>
		// 				<span>
		// 					<FaShower /> {property.bathrooms}
		// 				</span>
		// 				<span>
		// 					<GiStairs /> {property.total_floors}
		// 				</span>
		// 			</Col>
		// 		</Row>
		// 		<hr />
		// 		<Link to={`/property/${property.slug}`}>
		// 			<Button variant="primary">Get More Info &gt; &gt;</Button>
		// 		</Link>
		// 	</Card.Body>
		// </Card>
	);
};

export default Property;