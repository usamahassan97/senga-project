import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";
import success from "../../../Assets/Icons/blacktick.PNG"
import {Heading, Text } from "@chakra-ui/react";



const Success = (args) => {
  return (
    <div>
    <Modal centered {...args}  className="p-3">
      
      <ModalBody className="p-3">
       <div>
        <div className=" pt-3 text-center">
        <Heading as="h1" size="lg">Transaction<br/>
Successful</Heading>
        </div>
        <div className="pt-4 ps-5 ms-5">
          <img className=" ps-3" src={success}></img>
        </div>
          <div className= "modal-btn pt-5  pb-3"><Row><Col>
          <button className="btn2-cash p-3 w-100 ">Back To Home </button></Col><Col> <Button className="w-100 p-3" style={{ backgroundColor:"black"}} >View Deals</Button></Col></Row>

          </div>
      </div>

      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default Success
