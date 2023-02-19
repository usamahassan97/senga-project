import React from 'react'
import HomeTop from "../../components/subComponents/homeTop";
import InvestTop from './InvestTop';
import {  Container } from "@chakra-ui/react";
const Invest = () => {
  return (
    <Container maxW="900px">
      <div className="pt-5">
        <HomeTop head={"Invest"} />
      </div>
      <div>
        <InvestTop/>
      </div>
      </Container>
  )
}

export default Invest
