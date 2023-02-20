import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import {Heading, Text } from "@chakra-ui/react";
import CustomButtons from "../../subComponents/customButtons";
import success from "../../../Assets/Images/success1.PNG"



const Confirm = (args) => {
  return (
    <div>
     <Modal centered {...args}>
    <ModalHeader as="h5" size="sm" className="border-0" toggle={args.toggle}><Heading as="h5" size="sm">Confirm Instruction</Heading></ModalHeader>
      <ModalBody>
       <div>
         <div className="content mb-5">
          <Row ><Col className="pb-2">Account type</Col><Col className="text-end">General Investment</Col></Row><hr className="mt-1"/>
          <Row className="pt-4"><Col className="pb-2">Amount to buy</Col><Col className="text-end">1000 USD</Col></Row><hr className="mt-2"/>
          <Row className="pt-4"><Col>Risk level</Col><Col className="text-end">4/10</Col></Row>
         </div>
         <div className="pt-5 pb-3"><CustomButtons value={"Next"}/></div>
          

          
      </div>

      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default Confirm
