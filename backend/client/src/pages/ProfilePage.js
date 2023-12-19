// import React from 'react';
// import {
//   Button,
//   Card,
//   Form,
//   Container,
//   Row,
//   Col
// } from "react-bootstrap";
// import { useGetProfileDetailsQuery } from "../services/apiProperties";
// import { toast } from "react-toastify";
// import SpinnerComponent from "../components/SpinnerComponent";
// import { useSelector } from 'react-redux';


// const ProfilePage = () => {


//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <Col md="8">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h4">Edit Profile</Card.Title>
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <Form.Group>
//                         <label>Company (disabled)</label>
//                         <Form.Control
//                           defaultValue="Creative Code Inc."
//                           disabled
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="3">
//                       <Form.Group>
//                         <label>Username</label>
//                         <Form.Control
//                           defaultValue="michael23"
//                           placeholder="Username"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Form.Control
//                           placeholder="Email"
//                           type="email"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <Form.Group>
//                         <label>First Name</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="6">
//                       <Form.Group>
//                         <label>Last Name</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>Address</label>
//                         <Form.Control
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="4">
//                       <Form.Group>
//                         <label>City</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="4">
//                       <Form.Group>
//                         <label>Country</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label>Postal Code</label>
//                         <Form.Control
//                           placeholder="ZIP Code"
//                           type="number"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>About Me</label>
//                         <Form.Control
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                           that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           as="textarea"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Button
//                     className="btn-fill pull-right"
//                     type="submit"
//                     variant="info"
//                   >
//                     Update Profile
//                   </Button>
//                   <div className="clearfix"></div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md="4">
//             <Card className="card-user">
//               <div className="card-image">
//                 {/* <img
//                   alt="..."
//                   // src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
//                 ></img> */}
//               </div>
//               <Card.Body>
//                 <div className="author">
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     {/* <img
//                       alt="..."
//                       className="avatar border-gray"
//                       src={require("assets/img/faces/face-3.jpg")}
//                     ></img> */}
//                     <h5 className="title">Mike Andrew</h5>
//                   </a>
//                   <p className="description">michael24</p>
//                 </div>
//                 <p className="description text-center">
//                   "Lamborghini Mercy <br></br>
//                   Your chick she so thirsty <br></br>
//                   I'm in that two seat Lambo"
//                 </p>
//               </Card.Body>
//               <hr></hr>
//               <div className="button-container mr-auto ml-auto">
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-facebook-square"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-google-plus-square"></i>
//                 </Button>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default ProfilePage
import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SpinnerComponent from '../components/SpinnerComponent';
import axios from 'axios';

const ProfilePage = () => {
  const authState = useSelector((state) => state.auth);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/profile/me/', {
          headers: {
            Authorization: `Bearer ${authState.accessToken}`,
          },
        });

        setProfileData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching profile details:', error);
        toast.error('Error fetching profile details');
        setHasError(true);
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      // Set loading to false after a certain time (e.g., 10 seconds)
      setIsLoading(false);
      toast.error('Profile details loading timeout');
    }, 10000); // Adjust the timeout duration as needed

    if (authState.accessToken) {
      fetchProfileDetails();
    }

    // Clear the timeout when the component unmounts or when the request is successful
    return () => clearTimeout(timeoutId);
  }, [authState.accessToken]);

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (hasError) {
    return <div>Error loading profile details</div>;
  }

  if (!profileData) {
    return <div>No profile data found</div>;
  }

  const { company, username, email, /* other properties */ } = profileData;

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              {/* ... rest of your code ... */}
              <Row>
                <Col className="pr-1" md="5">
                  <Form.Group>
                    <label>Company (disabled)</label>
                    <Form.Control defaultValue={company} disabled placeholder="Company" type="text" />
                  </Form.Group>
                </Col>
                <Col className="px-1" md="3">
                  <Form.Group>
                    <label>Username</label>
                    <Form.Control defaultValue={username} placeholder="Username" type="text" />
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control defaultValue={email} placeholder="Email" type="email" />
                  </Form.Group>
                </Col>
              </Row>
              {/* ... rest of your form fields ... */}
            </Card>
          </Col>
          {/* ... other layout ... */}
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
