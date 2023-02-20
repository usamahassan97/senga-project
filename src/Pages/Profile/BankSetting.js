import React from 'react'
import { Container, Heading, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Button, Col, Row } from "reactstrap";
import HomeTop from "../../components/subComponents/homeTop";
import PaySource from './PaySource';
import BankAccounts from './BankAccounts';
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
            <div className="">
              <Heading as="h1" size="md">
              Card & Bank settings
              </Heading>
            </div>
          </Col>
        </Row>
      </div>
      <Container maxW="700px">
      <div className='pt-3' >
      <Tabs variant='none' >
  <TabList>
    <Tab  _selected={{ color: '#5F236E' }} className='pe-5'><strong >Payment Source</strong></Tab>
    <Tab   _selected={{ color: '#5F236E' }} className='ps-5'><strong >Bank Accounts</strong></Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <PaySource/>
    </TabPanel>
    <TabPanel>
     <BankAccounts/>
    </TabPanel>
    
  </TabPanels>
</Tabs>
      </div>
      </Container>
      <div className="btns text-end mt-5 pt-5 mb-5">
      <Button className="btn3 ps-5 pe-5 p-3">Update Settings</Button>
    </div>
      </Container>
  )
}

export default BankSetting
