import React, {useEffect} from 'react';
import { Col, Container, Row } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import Spinner from "../components/Spinner";
import { getProperties, reset } from '../features/properties/propertySlice';
import {toast} from 'react-toastify';
import Property from '../components/Property';

const PropertiesPage = () => {
  const {properties, isLoading, isError, message} = useSelector((state)=> state.properties)

  const dispatch = useDispatch();

  useEffect(() => {
    if(isError) {
      toast.error(message, {icon:"🤦‍♂️"})
    }
    dispatch(getProperties())
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
        <Container>
            <Row>
                <Col className='mg-top text-center'>
                    <h1>Our Catalog of Properties.</h1>
                    <hr className='hr-text'/>              
                </Col>
            </Row>
            {
              <>
                <Row xs={1} md={6} lg={4} className="g-4" >
                  {properties.map((property) => (
                    <Col
                    key={property.id}
                    // sm={12}
									  // md={6}
									  // lg={3}
									  // xl={3}
									  // className='ml-3'
								    >
                      <Property property={property} />
								    </Col>
							    ))}
						    </Row>
              </>
            }
        </Container>
    </>
  )
}

export default PropertiesPage