import React from 'react'

import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import CustomButtons from "../../components/subComponents/customButtons";

const Pending = () => {
  return (
    <Container>
      <div className="top">
        <Row>
          <Col>
            <a href=""> Back</a>
          </Col>
          <Col style={{textAlign:"center"}}>
            <h4>Tim's Investment </h4>
          </Col>
          <Col style={{textAlign:"end"}}>
            <a href="">Edit theme Settings</a>
          </Col>
        </Row>
        <div className="holding">
          <div className="hold-para1 mt-4">
            <Row>
              <Col>
              <div className="buy-text"><strong>Buy</strong></div>
              
              </Col>
              <Col>
              <div className="right-text text-end"><strong>$557</strong></div>
              
              </Col>
            </Row>
            <Row>
            <Col>
              <div className="left-text2 mt-2">Lorem ipsum dolor iugdc ;jsdb ,ahsdbc ljhaskjavhc lkajbvljab kajsblajvb  .asbv.
              <p>06/07/2022</p></div>
              
              </Col>
              <Col>
              <div className="right-text2 text-end mt-2">+USD20.55 (+6%)</div>
              
              </Col>
            </Row>
          </div>
          <div className="hold-para1 mt-2">
            <Row>
              <Col>
              <div className="sell-text"><strong>Sell</strong></div>
              
              </Col>
              <Col>
              <div className="right-text text-end"><strong>$557</strong></div>
              
              </Col>
            </Row>
            <Row>
            <Col>
              <div className="left-text2 mt-2">Sold Investment out of pot, to be updated in 24 hours in wallet
              <p>06/07/2022</p></div>
              
              </Col>
              <Col>
              <div className="right-text2 text-end mt-2">+USD20.55 (+6%)</div>
              
              </Col>
            </Row>
          </div>
          
          
        </div>
        <div className="btns text-end mt-5  ">
          <Button className="btn3 ">Fund Investment</Button>
        </div>
      </div>
      

    </Container>
  )
}

export default Pending