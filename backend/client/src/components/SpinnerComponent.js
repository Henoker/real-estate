import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = () => {
	return (
		<div className="d-flex justify-content-center">
		<Spinner animation="border" variant="primary" />
		</div>
		
	);
};

export default SpinnerComponent;