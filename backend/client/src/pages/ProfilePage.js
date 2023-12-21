import React, { useEffect } from 'react';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SpinnerComponent from '../components/SpinnerComponent';
import { useGetProfileQuery } from '../services/apiProperties';

const ProfilePage = () => {
  const { data: profile, isLoading, message, isError, isSuccess, refetch } = useGetProfileQuery();


 

 useEffect(() => {
    const fetchProfile = async () => {
      try {
        // The profile will be automatically fetched due to the refetch function
        await refetch();
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    // Fetch user profile when the component mounts
    fetchProfile();
  }, [refetch]);

  if (isLoading) {
    return <div><SpinnerComponent /></div>;
  }

  if (isError) {
    return toast.error(message, {icon:"🤦‍♂️"});
  }

  if (isSuccess) {(
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
                    <Form.Control defaultValue='' disabled placeholder="Company" type="text" />
                  </Form.Group>
                </Col>
                <Col className="px-1" md="3">
                  <Form.Group>
                    <label>Username</label>
                    <Form.Control defaultValue={profile.username} placeholder="Username" type="text" />
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control defaultValue={profile.email} placeholder="Email" type="email" />
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
}};

export default ProfilePage;
