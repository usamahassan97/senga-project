import React from 'react'
import { Row, Col } from "reactstrap";
import {   Heading } from "@chakra-ui/react";
import profile from "../../Assets/Icons/profile.png";
const HomeTop = (props) => {
  return (
    
        
        <div className="top-content">
          <Row>
            <Col xs={11}>
              <Heading as="h2" size="lg">
                {props.head}
              </Heading>
            </Col>
            <Col className="text-end  ">
              <img src={profile} alt="" />
            </Col>
          </Row>
        </div>
        
      
   
  )
}

export default HomeTop
