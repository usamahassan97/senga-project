import React from 'react'
import { Row, Col } from "reactstrap";
import {   Heading } from "@chakra-ui/react";
import profile from "../../Assets/Icons/profile.png";
import { Link } from 'react-router-dom';

const HomeTop = (props) => {
  return (
    
        
        <div className="top-content">
          <Row>
            <Col xs={9}>
              <Heading as="h2" size="lg">
                {props.head}
              </Heading>
            </Col>
            <Col><img src={props.question} alt="" />
            <strong>{props.help}</strong></Col>
            <Col className="text-end  ">
             <Link to = "/profile"><img src={profile} alt="" /></Link> 
            </Col>
          </Row>
        </div>
        
      
   
  )
}

export default HomeTop
