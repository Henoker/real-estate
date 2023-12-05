import React, {useEffect} from 'react';
import { Col, Container, Row } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import Spinner from "../components/Spinner";
import { getProperties, reset } from '../features/properties/propertySlice';
import {toast} from 'react-toastify';
import Property from '../components/Property';
import Title from '../components/Title';
import IntroSingle from '../components/IntroSingle';

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
        <Title title="our properties catalog" />
        <IntroSingle/>
        {/* <Container>
            <Row>
                <Col className='mg-top text-center'>
                    <h1>Our Catalog of Properties.</h1>
                    <hr className='hr-text'/>              
                </Col>
            </Row> */}
            {
              <section className="property-grid grid">
              <div className="container">
                <div className="row">
                {/* <Row xs={1} md={6} lg={4} className="g-4" > */}
                  {properties.map((property) => (
                    // <Col
                    <div className="col-md-4">
                      <div className="card-box-a card-shadow">
                      <Property property={property} key={property.id} />
                      </div>
                    </div>
                    
                    // sm={12}
									  // md={6}
									  // lg={3}
									  // xl={3}
									  // className='ml-3'
								    
                      
								    // </Col>
							    ))}
						    {/* </Row> */}
              </div>
              </div>
              </section>
            }
        {/* </Container> */}
    </>
  )
}

export default PropertiesPage