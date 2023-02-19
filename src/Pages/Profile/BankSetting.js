import React from 'react'
import { Container, Heading, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Button, Col, Row } from "reactstrap";
import HomeTop from "../../components/subComponents/homeTop";
const BankSetting = () => {
  return (
    <Container maxW="900px">
      <div className="pt-5">
        <HomeTop head={"Profile"} />
      </div>
      <div className="pt-5">
        <Row>
          <Col className=" ">
            <a href="">Back</a>
          </Col>
          <Col className="pb-5 " xs={8}>
            <div className=" ps-4 ms-3">
              <Heading as="h1" size="md">
              Card & Bank settings
              </Heading>
            </div>
          </Col>
        </Row>
      </div>
      <div className='pt-3' >
      <Tabs variant='none' >
  <TabList>
    <Tab  _selected={{ color: '#5F236E' }} className='pe-5'><strong >Payment Source</strong></Tab>
    <Tab   _selected={{ color: '#5F236E' }} className='ps-5'><strong >Bank Accounts</strong></Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      
    </TabPanel>
    <TabPanel>
     
    </TabPanel>
    
  </TabPanels>
</Tabs>
      </div>
    
      </Container>
  )
}

export default BankSetting
