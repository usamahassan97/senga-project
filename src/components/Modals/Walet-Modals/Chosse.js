import React,{useState} from "react";
import { Col, Row, Button } from "react-bootstrap";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";
import {  Heading, Text } from "@chakra-ui/react";
import vector from "../../../Assets/Icons/Vector1.png";
import { Link } from "react-router-dom";
import CreditDetail from "../CreditDetail";
import CardDetail from "./CardDetail";


const Chosse = (args) => {
  const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
  const handleClick = () => {
    setModal(true)
  };
  return (
    <div>
    <Modal centered {...args}>
      
      <ModalBody>
       <div className="p-5">
       <ModalHeader className="border-0  " toggle={args.toggle}> <Heading as="h5" size="sm">Security</Heading></ModalHeader>
        <div className="pt-3 ">
        <div className="pt-4">
            
              <Button className="btn4 w-100 pt-3 pb-3" style={{border:"1px solid rgba(0, 0, 0, 0.3)"}}>
                <Row>
                  <Col xs={11} className="text-start d-flex">
                    
                    <Text
                      className="ps-2 "
                      style={{ fontSize: "20px ", color: "black" }}
                    >
                     Tim’s Investment (General investments)
                    </Text>
                  </Col>
                  <Col>
                    <img className="pt-2" src={vector}></img>
                  </Col>
                </Row>
              </Button>
            
          </div>
          <div className="pt-4">
            
              <Button className="btn4 w-100 pt-3 pb-3" style={{border:"1px solid rgba(0, 0, 0, 0.3)"}}>
                <Row>
                  <Col xs={11} className="text-start d-flex">
                    
                    <Text
                      className="ps-2 "
                      style={{ fontSize: "20px ", color: "black" }}
                    >
                     Tim’s Investment  (General investments)
                    </Text>
                  </Col>
                  <Col>
                    <img className="pt-2" src={vector}></img>
                  </Col>
                </Row>
              </Button>
            
          </div>
          <div className="pt-4">
            
              <Button className="btn4 w-100 pt-3 pb-3" style={{border:"1px solid rgba(0, 0, 0, 0.3)"}}>
                <Row>
                  <Col xs={11} className="text-start d-flex">
                    
                    <Text
                      className="ps-2 "
                      style={{ fontSize: "20px ", color: "black" }}
                    >
                     Iphone 14 (General investments)
                    </Text>
                  </Col>
                  <Col>
                    <img className="pt-2" src={vector}></img>
                  </Col>
                </Row>
              </Button>
            
          </div>
          <div className="pt-4">
         
            <Button className="btn4 w-100 pt-3 pb-3" onClick={handleClick} style={{border:"1px solid rgba(0, 0, 0, 0.3)"}}>
              <Row>
                <Col xs={11} className="text-start d-flex">
                  
                  <Text
                    className="ps-2 "
                    style={{ fontSize: "20px ", color: "black" }}
                  >
                    Bank Account  (09878909)
                  </Text>
                </Col>
                <Col>
                  <img className="pt-2" src={vector}></img>
                </Col>
              </Row>
            </Button>
           
          </div>
        
        </div>
          <div className= " pb-3">
          

          </div>
      </div>
      <CardDetail isOpen={modal} toggle={toggle} />
      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default Chosse
