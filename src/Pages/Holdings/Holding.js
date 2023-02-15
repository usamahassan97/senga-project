import React from 'react'
import {  Col, Row, Button } from 'react-bootstrap'
import {  Container} from '@chakra-ui/react'

import "./holding.css"
import TopDetail from '../details/TopDetail';
const Holding = () => {
  const holdData=[
    {
      id: 1,
      head: "REDMI",
      value: "$557",
    },{
    id: 2,
    head: "ADIDAS",
    value: "$557",
  },{
  id: 3,
  head: "ADIDAS",
  value: "$557",
},{ id: 4,
  head: "ADIDAS",
  value: "$557",
},{ id: 5,
  head: "ADIDAS",
  value: "$557",
},
  ]
  return (
    <Container maxW='900px'>
       
  
  <div className="top ">
    <TopDetail/>
  </div>
        <div className="holding">
        {holdData.map((data) => (
          <div className="hold-para1 mt-4" key = {data.id}>
            <Row>
              <Col>
              <div className="left-text"><strong>{data.head}</strong></div>
              
              </Col>
              <Col>
              <div className="right-text text-end"><strong>{data.value}</strong></div>
              
              </Col>
            </Row>
            <Row>
            <Col>
              <div className="left-text2 mt-2">Lorem ipsum dolor iugdc ;jsdb ,ahsdbc ljhaskjavhc lkajbvljab kajsblajvb  .asbv.</div>
              
              </Col>
              <Col>
              <div className="right-text2 text-end mt-2">+USD20.55 (+6%)</div>
              
              </Col>
            </Row>
          </div>
          ))}
          
          <div className="hold-para1 mt-5">
            <Row>
              <Col>
              <div className="left-text"><strong>Total Value</strong></div>
              
              </Col>
              <Col>
              <div className="right-text text-end"><strong>$1,557</strong></div>
              
              </Col>
            </Row>
            <Row>
            <Col>
              <div className="left-text2 mt-2"></div>
              
              </Col>
              <Col>
              <div className="right-text2 text-end mt-2">+USD20.55 (+6%)</div>
              
              </Col>
            </Row>
          </div>
        </div>
        <div className="btns text-end mt-5 ">
          <Button className="btn3 p-3 ps-5 pe-5">Fund Investment</Button>
        </div>
      

    </Container>
  )
}

export default Holding