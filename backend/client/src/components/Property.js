import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { FaBed, FaShower } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";
import { Link } from "react-router-dom";
// import cover_photo from '../images/house_sample_VY1oSqz.jpg'

const Property = ({ property }) => {
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
 

	return (
		<Card >
			<Badge
				bg="success"
				className="position-absolute top-0 start-100 translate-middle rounded-pill"
			>
				{property.advert_type}
			</Badge>
		    <Link to={`/property/${property.slug}`}>
			 <Card.Img variant="top" src={"http://localhost:8000"+property.cover_photo}  
			 style={{
            height: 260,
            width: '100%',
          }}  />
			 </Link>
			{/* <Link to={`/property/${property.slug}`}>
			  
                {/* <Card.Img src={cover_photo} alt="image" variant="top" /> 
			</Link> */}
			<Card.Title className="property-price">
				${numberWithCommas(Number(property.price))}
			</Card.Title>
			<Card.Body>
				<Card.Title as="h4">
					<strong>{property.title}</strong>
				</Card.Title>

				<Card.Text as="p">
					{property.description.substring(0, 70)}...
				</Card.Text>
				<hr />
				<Row>
					<Col className="d-flex justify-content-between">
						<span>
							<FaBed /> {property.bedrooms}
						</span>
						<span>
							<FaShower /> {property.bathrooms}
						</span>
						<span>
							<GiStairs /> {property.total_floors}
						</span>
					</Col>
				</Row>
				<hr />
				<Link to={`/property/${property.slug}`}>
					<Button variant="primary">Get More Info &gt; &gt;</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Property;