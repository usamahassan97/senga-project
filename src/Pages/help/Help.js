import React from 'react'
import HomeTop from "../../components/subComponents/homeTop";
import { Container, Text } from "@chakra-ui/react";
import { Button } from 'reactstrap';
import edit from "../../Assets/Icons/edit.png"
import "./help.css"
const Help = () => {
  return (
    <Container maxW="900px">
      <div className="pt-5">
        <HomeTop head={"Help"} />
      </div>
      <Container maxW="800px" className='mb-5 pb-5'>
      <div className='pt-5 mt-5 mb-5 pb-5'>
        <Text style={{color:"rgba(51, 51, 51, 0.6)"}}>If our automated responses are not suffecient for your answers, you can leave a message and our team
is available to get to them as soon as we can</Text>
      </div>
      <div className='d-flex pt-5 mt-5'>
        <div className='pe-3'>
            <Button className='help-btn p-2 ps-4 pe-4'>General Enquiry</Button>
        </div>
        <div className='pe-3 ps-2'>
            <Button className='help-btn p-2 ps-5 pe-5'>Withdrawal</Button>
        </div>
        <div className='pe-3 ps-2'>
            <Button className='help-btn p-2 ps-5 pe-5'>Payment</Button>
        </div>
        <div className='ps-2'>
            <Button className='help-btn p-2 ps-5 pe-5'>Investments</Button>
        </div>
        </div>
        <div className='d-flex pt-4'>
        <div >
            <Button className='help-btn p-2 ps-5 pe-5'>Security Reports</Button>
        </div>
        <div className='d-flex ps-4 pt-3'>
            <img className='pe-3' style={{width:"50px", height:"20px"}} src={edit}>
            </img>
            <Text style={{color:"rgba(51, 51, 51, 0.6)"}}>
            Customise message
            </Text>
        </div>
        </div>
        </Container>
      </Container>
  )
}

export default Help
