import React from 'react'
import {  Container} from '@chakra-ui/react'
import {  Col, Row, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import CustomButtons from "../../components/subComponents/customButtons";
import TopDetail from '../details/TopDetail';

const Pending = () => {
  return (
    <Container maxW='900px'>
       <div className="top ">
    <TopDetail/>
  </div>
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
        <div className="btns text-end mt-5 pt-5 ">
          <Button className="btn3 p-3 ps-5 pe-5">Fund Investment</Button>
        </div>
      
      

    </Container>
  )
}

export default Pending