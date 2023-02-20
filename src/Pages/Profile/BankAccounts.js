import React from 'react'
import {  Col, Row } from "reactstrap";
import { Heading, Text } from '@chakra-ui/react'
import dell from "../../Assets/Icons/dell.png"
import plus from "../../Assets/Icons/Pplus.png"
const BankAccounts = () => {
  return (
    <div>
      <div>
        <Heading as="h5" size="md">Bank Accounts</Heading>
        <Text style={{color:"rgba(51, 51, 51, 0.5)"}} className="pt-2">Securely manage all your bank accounts & other accounts connected to us</Text>
      </div>
      <div className='pt-5'>
      <Row>
            <Col xs={10}>
            <Text fontSize='xl'>09878909</Text>
        <Text style={{color:"rgba(51, 51, 51, 0.5)"}} className="pt-2">European Union</Text>
            </Col>
            <Col>
            <div className=' text-end pb-3 d-flex' style={{color:"rgba(51, 51, 51, 0.5)"}}><img className='pe-3' src={dell}></img><div className='pt-3'><Text >Remove</Text></div> </div>
            
            </Col>
        </Row>
      </div>
      <div className='pt-5'>
      <Row>
            <Col xs={10}>
            <Text fontSize='xl'>09878909</Text>
        <Text style={{color:"rgba(51, 51, 51, 0.5)"}} className="pt-2">European Union</Text>
            </Col>
            <Col>
            <div className=' text-end pb-3 d-flex' style={{color:"rgba(51, 51, 51, 0.5)"}}><img className='pe-3' src={dell}></img><div className='pt-3'><Text >Remove</Text></div> </div>
            
            </Col>
        </Row>
      </div>
      <div className='pt-5 d-flex' style={{color:"#5F236E"}}>
<img className='pe-3' src={plus}></img>
<a href=''>Add New Payment Source</a>
        </div>
    </div>
  )
}

export default BankAccounts
