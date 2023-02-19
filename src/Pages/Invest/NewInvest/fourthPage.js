import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react'
import { Row, Col, Button } from "reactstrap";
const FourthPage = () => {
  return (
    <div>
      <div className="mb-5 pt-3 pot-to-head">
              
              <strong>Customize Investment</strong>
              <Text>
              Review investment settings before going ahead
              </Text>
            </div>
            <Card style={{border:"1px solid rgba(51, 51, 51, 0.5)"}}>
              <CardBody>
              <div className="content ">
          <Row className='pt-3 pb-2'><Col >Account type</Col><Col className="text-end">General Investment</Col></Row><hr className='pt-2'/>
          <Row className='pt-3 pb-2'><Col>Timeframe</Col><Col className="text-end">6 Months</Col></Row><hr className='pt-2'/>
          <Row className='pt-3 pb-2'><Col>Starting contribution</Col><Col className="text-end">1000 USD</Col></Row><hr className='pt-2'/>
          <Row className='pt-3 pb-2'><Col>Monthly contribution</Col><Col className="text-end">50 USD</Col></Row><hr className='pt-2'/>
          <Row className='pt-3 pb-2'><Col>Risk level</Col><Col className="text-end">4/10</Col></Row>
         </div>
              </CardBody>
            </Card>
            <div className='pt-3' style={{color:"rgba(1, 11, 255, 0.4)"}}>
              <a href=''>Edit Investment plan</a>
            </div>
    </div>
  )
}

export default FourthPage
