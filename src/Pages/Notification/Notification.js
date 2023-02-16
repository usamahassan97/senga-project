import React from 'react'
import {  Container, Text} from "@chakra-ui/react";
import HomeTop from '../../components/subComponents/homeTop';
import { Col, Row } from 'reactstrap';
import vector from "../../Assets/Icons/Vector1.png"
import wallet from "../../Assets/Icons/wallet.png";
import invest from "../../Assets/Icons/invest.png";
const Notification = () => {
    const notifydata=[
        {
            id: 1,
            image: invest,
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            link:"View Investment "
        },
        {
            id: 2,
            image: wallet,
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            link:"View Wallet"
        },
        {
            id: 3,
            image: invest,
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            link:"View Investment "
        },
        {
            id: 4,
            image: invest,
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            link:"View Investment "
        }, {
            id: 5,
            image: invest,
            detail:"Your monthly renewal on Tim’s Investment is due today",
            date:"20 Oct. 2022",
            link:"View Investment "
        }
    ]
  return (
    <Container maxW="900px">
        <div className='mt-5'><HomeTop head={"Notifications"}/></div>
        <div className='pt-5 mt-5 mb-5'>
        {notifydata.map((data) => (
        <div className='pt-3 pb-4' key={data.id}>
            <Row>
                <Col><img className='pt-3' src={data.image} alt="" /></Col>
                <Col xs={11}><Text >{data.detail}</Text>
                <Row><Col xs={9} className= "pt-2"><Text color="grey">{data.date}</Text></Col><Col> <div className='d-flex text-end '><a  href=''>{data.link} </a> <img className='ps-4' src={vector}></img></div></Col></Row>
                
               </Col>
            </Row>
        </div>
        ))}
        </div>
        
     
    </Container>
  )
}

export default Notification
