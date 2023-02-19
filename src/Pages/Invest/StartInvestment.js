import React from 'react'
import Holding from '../Holdings/Holding'
import Pending from '../Pending/Pending'
import InvestDetail from './InvestDetail'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import profile from "../../Assets/Icons/profile.png"
const StartInvestment = () => {
  return (
    <div>
      
      
      <Tabs isFitted colorScheme='purple'>
  <TabList mb='1em'>
    <Tab className='text-start'>Details</Tab>
    <Tab>Holding</Tab>
    <Tab>Pending Deals</Tab>
    <Tab><img src={profile}></img></Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <InvestDetail/>
    </TabPanel>
    <TabPanel>
      <Holding/>
    </TabPanel>
    <TabPanel>
      <Pending/>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
  )
}

export default StartInvestment
