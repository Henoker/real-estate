import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Map from '../components/Map';

// import {useDispatch, useSelector} from 'react-redux';

const PropertyPage = () => {



  return (
    <>
   <div className="about_top">
      <div className="container">
        <div className="standards">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link  eventKey="first">
                Picture
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" >location</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second"><Map /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
          <div className="clearfix"> </div>
        </div>
        {/* Add the rest of your components here */}
      </div>
    </div>
    
      
   
    
     

    </>
  )
}

export default PropertyPage