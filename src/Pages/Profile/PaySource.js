import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Switch } from "@chakra-ui/react";

import {  Col, Row } from "reactstrap";
import capture from "../../Assets/Icons/Capture.PNG";
import plus from "../../Assets/Icons/Pplus.png"
import pay from "../../Assets/Icons/pay.png"
import credit from "../../Assets/Icons/creditcard.png"
import paypal from "../../Assets/Icons/paypal.png"
import dell from "../../Assets/Icons/dell.png"
import master from "../../Assets/Icons/mastercard.png"


const PaySource = () => {
  return (
    <div>
      <div>
        <Heading as="h5" size="md">Credit Cards</Heading>
        <Text style={{color:"rgba(51, 51, 51, 0.5)"}} className="pt-2">Securely manage all your credit cards connected to us</Text>
      </div>
      <div className='pt-3'>
        <Row>
            <Col>
            <img src={capture}></img>
            </Col>
            <Col>
            <div className='pt-5 mt-5 pb-3 d-flex' style={{color:"rgba(51, 51, 51, 0.5)"}}><img className='pe-3' src={dell}></img> <Text className='pt-3'>Delete Card</Text></div>
            
            </Col>
        </Row>
      </div>
      <div className='pt-3'>
          <Row>
            <Col>
              <strong>Show Dashboard Balances</strong>
            </Col>
            <Col className="text-end">
              <Switch size="md" />
            </Col>
          </Row>
        </div>
        <div className='pt-5 d-flex' style={{color:"#5F236E"}}>
<img className='pe-3' src={plus}></img>
<a href=''>Add New Payment Source</a>
        </div>
        <div className='pt-5 d-flex'>
         <div className='pe-4 pt-3'>
            <img src={pay}></img>
         </div>
         <div className='ps-5 mb-4 pe-5'>
            <img src={credit}></img>
         </div>
         <div className='ps-5 pe-5 pt-3'>
            <img src={paypal}></img>
         </div>
         <div className='ps-5 pe-2 pt-3'>
            <img src={master}></img>
         </div>
        </div>

    </div>
  )
}

export default PaySource
