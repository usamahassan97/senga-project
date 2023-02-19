import React from 'react'
import { Row, Col, Button } from "reactstrap";
import angle from "../../Assets/Icons/Vector1.png";
import vector from "../../Assets/Icons/Vector.png";
import Cards from "../../components/Card-home/Cards";
import {  Container, Heading } from "@chakra-ui/react";
const InvestPot = () => {
  return (
    <>
    <div className="card-head mt-4">
        <Row>
          <Col xs={10}>
            <Heading as="h4" size="md">Your Investment Pots</Heading>
          </Col>
          <Col className="text-end">
            <Row>
              <Col>
                <img className="pe-2 text-end" src={vector} alt="" />
              </Col>
              <Col>
                {" "}
                <img className="ps-2 text-start" src={angle} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
       <div className="h-card mt-4">
       <Cards />
     </div>
     <div className="home-button">
       <div className="btns text-start mt-5 pt-5 mb-5">
         <Button className="btn3 ps-5 pe-5 p-3">Create New Pot </Button>
       </div>
     </div>
     </>
  )
}

export default InvestPot
