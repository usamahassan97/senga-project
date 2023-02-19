import React from 'react'
import {  Container, Text} from "@chakra-ui/react";
import edit from "../../Assets/Icons/edit.png"
const Newmessage = () => {
  return (
    <Container maxW="900px">
    
    <div className='pt-5  mb-5 pb-5'>
   <Text ><strong>New Message</strong></Text>
            <Text color="grey">Your messages and complaints would be attended to and replied as soon as we can</Text>
            
         
    </div>
    <div className='d-flex text-bottom pt-5 mt-5' style={{flexDirection:"row-reverse"}}>
       <a style={{color:"rgba(51, 51, 51, 0.7)"}} href=''>Customise message</a> <img className='text-end pe-2' src={edit}></img>
    </div>
 
</Container>
  )
}

export default Newmessage
