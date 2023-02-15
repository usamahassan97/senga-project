import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import profile from "../../Assets/Icons/profile.png"
import Detail from '../../Pages/details/Detail'
import Holding from '../../Pages/Holdings/Holding'
import Pending from '../../Pages/Pending/Pending'
const TabInvestment = () => {
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
      <Detail/>
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

export default TabInvestment
