import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Mtabs = () => {
  return (
    <div>
      <Tabs isFitted variant='none'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Mtabs
