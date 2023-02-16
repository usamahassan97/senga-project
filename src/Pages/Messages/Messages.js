import React from 'react'
import {  Container, Text, Button} from "@chakra-ui/react";
import HomeTop from '../../components/subComponents/homeTop';
import { Col, Row } from 'reactstrap';
import vector from "../../Assets/Icons/Vector1.png"
import plus from "../../Assets/Icons/plus.png"
import Mtabs from './Mtabs';
import question from "../../Assets/Icons/question.png";
const Messages = () => {
    const msgsydata=[
        {
            id: 1,
            
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            
        },
        {
            id: 2,
            
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            
        },
        {
            id: 3,
            
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            
        },
        {
            id: 4,
            
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            
        }, {
            id: 5,
            
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            
        }
    ]
  return (
    <Container maxW="900px">
    <div className='mt-5'><HomeTop head={"Notifications"} question={question} help={"Help"}/></div>
    <div>
{/* <Mtabs/> */}
    </div>
    <div className='pt-5 mt-5 mb-5'>
    {msgsydata.map((data) => (
    <div className='pt-3 pb-4' key={data.id}>
        <Row>
            
            <Col xs={11}><Text >{data.detail}</Text>
            <Row><Col xs={10} className= "pt-2"><Text color="grey">{data.date}</Text></Col><Col> <div className='d-flex ps-5 ms-1 '><Text>Seen </Text> <img className='ps-4' src={vector}></img></div></Col></Row>
            
           </Col>
        </Row>
    </div>
    
    ))}
    </div>
    <div className='text-end mb-5 mt-5' >
        <Button style={{backgroundColor:"#5F236E", color:"white"}} className='p-4 ps-5 pe-5'><img className='pe-3' src={plus}></img> NEW MESSAGE</Button>
    </div>
 
</Container>
  )
}

export default Messages
