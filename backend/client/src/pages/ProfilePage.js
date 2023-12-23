// import React, { useEffect } from 'react';
// import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
// import { toast } from 'react-toastify';
// import SpinnerComponent from '../components/SpinnerComponent';
// import { useGetProfileQuery } from '../services/apiProperties';

// const ProfilePage = () => {
//   (
//     <>
//       <Container fluid>
//         <Row>
//           <Col md="8">
//             <Card>
//               {/* ... rest of your code ... */}
//               <Row>
//                 <Col className="pr-1" md="5">
//                   <Form.Group>
//                     <label>Company (disabled)</label>
//                     <Form.Control defaultValue='' disabled placeholder="Company" type="text" />
//                   </Form.Group>
//                 </Col>
//                 <Col className="px-1" md="3">
//                   <Form.Group>
//                     <label>Username</label>
//                     <Form.Control defaultValue={profile.username} placeholder="Username" type="text" />
//                   </Form.Group>
//                 </Col>
//                 <Col className="pl-1" md="4">
//                   <Form.Group>
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <Form.Control defaultValue={profile.email} placeholder="Email" type="email" />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               {/* ... rest of your form fields ... */}
//             </Card>
//           </Col>
//           {/* ... other layout ... */}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ProfilePage;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SpinnerComponent from '../components/SpinnerComponent';
import { fetchUserProfile, resetProfile } from '../features/auth/profileSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { profile, isLoading, isError, isSuccess, message } = useSelector((state) => state.profile);

  useEffect(() => {
    // Dispatch the fetchUserProfile action when the component mounts
    dispatch(fetchUserProfile());

    // Clean up the profile state when the component unmounts
    return () => {
      dispatch(resetProfile());
    };
  }, [dispatch]);

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (isError) {
    // Handle error (show toast, redirect, etc.)
    toast.error(`Error: ${message}`);
    return null; // or render an error component
  }

  return (
    // <>
    //   <Container fluid>
    //     <Row>
    //       <Col md="8">
    //         <Card>
    //           {/* ... rest of your code ... */}
    //           <Row>
    //             <Col className="pr-1" md="5">
    //               <Form.Group>
    //                 <label>Company (disabled)</label>
    //                 <Form.Control defaultValue={''} disabled placeholder="Company" type="text" />
    //               </Form.Group>
    //             </Col>
    //             <Col className="px-1" md="3">
    //               <Form.Group>
    //                 <label>Username</label>
    //                 <Form.Control defaultValue={profile?.username || ''} placeholder="Username" type="text" />
    //               </Form.Group>
    //             </Col>
    //             <Col className="pl-1" md="4">
    //               <Form.Group>
    //                 <label htmlFor="exampleInputEmail1">Email address</label>
    //                 <Form.Control defaultValue={profile?.email || ''} placeholder="Email" type="email" />
    //               </Form.Group>
    //             </Col>
    //           </Row>
    //           {/* ... rest of your form fields ... */}
    //         </Card>
    //       </Col>
    //       {/* ... other layout ... */}
    //     </Row>
    //   </Container>
    // </>
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue={profile?.username || ''}
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          defaultValue={profile?.email || ''}
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={profile?.first_name || ''}
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={profile?.last_name || ''}
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={(profile?.city && profile?.country) || ''}
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue={profile?.city || ''}
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue={profile?.country || ''}
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue={profile?.about_me || ''}
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={"https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={profile?.profile_photo || ''}
                    ></img>
                    <h5 className="title">{profile?.full_name || ''}</h5>
                  </a>
                  <p className="description">{profile?.username || ''}</p>
                </div>
                <p className="description text-center">
                {profile?.about_me || ''}
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
