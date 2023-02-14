import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";
import success from "../../../Assets/Images/success1.PNG"



const Confirm = (args) => {
  return (
    <div>
     <Modal centered {...args}>
    <ModalHeader className="border-0" toggle={args.toggle}>Confirm Instruction</ModalHeader>
      <ModalBody>
       <div>
         <div className="content mb-5">
          <Row><Col>Account type</Col><Col className="text-end">General Investment</Col></Row><hr/>
          <Row><Col>Amount to buy</Col><Col className="text-end">1000 USD</Col></Row><hr/>
          <Row><Col>Risk level</Col><Col className="text-end">4/10</Col></Row>
         </div>
         <div className="pt-5 pb-3"><CustomButtons value={"Next"}/></div>
          

          
      </div>

      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default Confirm
