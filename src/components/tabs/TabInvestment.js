import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import profile from "../../Assets/Icons/profile.png"
const TabInvestment = () => {
  return (
    <div>
      <Tabs isFitted >
  <TabList mb='1em'>
    <Tab>Details</Tab>
    <Tab>Holding</Tab>
    <Tab>Pending Deals</Tab>
    <Tab><img src={profile}></img></Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default TabInvestment
