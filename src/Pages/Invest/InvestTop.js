import React from 'react'
import arrow from "../../Assets/Icons/up-arrow.png";
import {  Heading } from "@chakra-ui/react";
import {Card, CardBody }from "reactstrap"
import { Row, Col } from "reactstrap";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CashInvestment from '../cash/CashInvestment';
import InvestPot from './InvestPot';
import Buttons from './Button';
const InvestTop = () => {
  return (
    <div>
      <div className="pt-5 pb-2">
      <Card maxW="sm" className="wallet-card w-50 " style={{backgroundColor:"#5F236E"}}>
              <CardBody>
                <div className="sec-one mt-3">
                  <Row>
                    <Col className="text-end wallet-img ps-4 pt-3">
                      <img src={arrow} alt="" />
                    </Col>
                    <Col xs={10} >
                      <p className="pb-2" style={{color:"white"}}>Total Investment</p>
                      <Heading style={{color:"white"}} as="h2" size="lg" className="pb-2">
                      $10,000
                      </Heading>
                      <div className="sub-content pt-3 pb-2">
                        <Row
                          className="pe-2"
                          style={{ fontSize: "10px", color: "white" }}
                        >
                           <Col>+$500 (18%)</Col>
                        <Col>+$20.55 (6%)</Col>
                        </Row>
                        <Row
                          className="pe-2"
                          style={{ fontSize: "10px", color: " #FFFFFF8C" }}
                        >
                          <Col>Total Gain/Loss </Col>
                        <Col>Today's Gain/Loss </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
      </div>
      <div className='pt-3' >
      <Tabs variant='none' >
  <TabList>
    <Tab  _selected={{ color: '#5F236E' }} className='pe-5'><strong >New Investment</strong></Tab>
    <Tab   _selected={{ color: '#5F236E' }} className='ps-5'><strong >Existing Investments</strong></Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <Buttons/>
    </TabPanel>
    <TabPanel>
     <InvestPot/>
    </TabPanel>
    
  </TabPanels>
</Tabs>
      </div>
    </div>
  )
}

export default InvestTop
