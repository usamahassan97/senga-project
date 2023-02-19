import React from 'react'
import {  Container, Text, Button} from "@chakra-ui/react";
import HomeTop from '../../components/subComponents/homeTop';

import Mtabs from './Mtabs';
import question from "../../Assets/Icons/question.png";

const Messages = () => {
   
  return (
    <Container maxW="900px">
    <div className='mt-5'><HomeTop head={"Notifications"} question={question} help={"Help"}/></div>
    <div className='pt-3'>
<Mtabs/>
    </div>
    
    
 
</Container>
  )
}

export default Messages
