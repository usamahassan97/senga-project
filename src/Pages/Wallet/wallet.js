import {  Container, Heading, Text } from "@chakra-ui/react";
import React, {useState} from "react";
import wallet from "../../Assets/Icons/h-wallet.png";
import HomeTop from "../../components/subComponents/homeTop";
import "./wallet.css";
import { Row, Col, Button,Card, CardBody } from "reactstrap";
import plus from "../../Assets/Icons/plus.png"
import left from "../../Assets/Icons/left.png"
import vector from "../../Assets/Icons/Vector1.png"
import Chosse from "../../components/Modals/Walet-Modals/Chosse";

const Wallet = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
   const handleClick = () => {
     setModal(true)
   };
  const transdata=[
    {
      id:1,
      detail:"Credit transaction to walleT funded by Tim’s Investment pot ",
      amount: <div style={{color:"green"}}>+S1,000</div>,
      date: "06/07/2022"
    },
    {
      id:2,
      detail:"Debit transaction transferred to Tim’s investment pot",
      amount: <div style={{color:"red"}}>-S500</div>,
      date: "06/07/2022"
    },
    {
      id:3,
      detail:"Debit transaction transferred to Tim’s investment pot ",
      amount: <div style={{color:"red"}}>-S500</div>,
      date: "06/07/2022"
    },
  ]
  return (
    <Container maxW="900px">
      <div className="pt-5">
        <HomeTop head={"Wallet"} />
      </div>
      <div className="pt-5 pb-2">
        <Row>
          <Col>
            <Card maxW="sm" className="wallet-card w-100  bg-dark">
              <CardBody>
                <div className="sec-one mt-3">
                  <Row>
                    <Col className="text-end wallet-img ps-2 pt-3">
                      <img src={wallet} alt="" />
                    </Col>
                    <Col xs={10} className="pe-2">
                      <p className="pb-2" style={{color:"white"}}>Total Assets</p>
                      <Heading style={{color:"white"}} as="h2" size="lg" className="pb-2">
                        $20,000
                      </Heading>
                      <div className="sub-content pt-3 pb-2">
                        <Row
                          className="pe-2"
                          style={{ fontSize: "10px", color: "white" }}
                        >
                          <Col>+$10,000 (50%)</Col>
                          <Col>+$10,000</Col>
                        </Row>
                        <Row
                          className="pe-2"
                          style={{ fontSize: "10px", color: " #FFFFFF8C" }}
                        >
                          <Col>Cash Value </Col>
                          <Col>Invested Value </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <div className="btn-one pb-2 pt-3 ps-2">
              <Button className=" bg-dark p-3 ps-5 pe-5 d-flex">ADD MONEY    <img className="pt-1 ps-4" src={plus}></img></Button>
            </div>
            <div  className="btn-two pb-3  p-2 pb-3">
              <Button className="bg-light btn-one ps-4 pe-4 p-3 d-flex" onClick={handleClick} >TRANSFER/WITHDRAW <img className="pt-2 ps-2" src={left}></img></Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="d-flex pt-2">
        <Text fontSize='2xl' >Amount</Text><Text className="ps-2 pt-2">(How much would you like to fund wallet with)</Text>
      </div>
      <Card className="wall-card  mt-3">
  <CardBody>
    <Row><Col xs={11}>USD 1,000</Col> <Col className="text-center"><img src={vector}></img></Col></Row>
  </CardBody>
</Card>
<Card className="wall-card  mt-3 mb-5">
  <CardBody>
  <Text fontSize='2xl' >TRANSACTIONS</Text>
  {transdata.map((data) => (
    <div key={data.id} className="pt-2 pb-2">
    <Row className="pt-2"><Col xs={8} >{data.detail} </Col> <Col className="text-end">{data.amount}</Col></Row>
    <Text>{data.date}</Text></div>
  ))}
  </CardBody>
</Card>
<Chosse isOpen={modal} toggle={toggle} />
    </Container>

  );
};

export default Wallet;
