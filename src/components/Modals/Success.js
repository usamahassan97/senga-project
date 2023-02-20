import React, { useState } from "react";
import {Heading, Text } from "@chakra-ui/react";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../subComponents/customButtons";
import success from "../../Assets/Images/success1.PNG"
import { Link } from "react-router-dom";

const Success = (args) => {
  return (
    <div>
    <Modal centered {...args}>
      
      <ModalBody>
       <div>
        <div className=" pt-5 text-center">
        <Heading as="h1" size="lg">Transaction<br/>
Successful</Heading>
        </div>
        <div className="pt-5 ps-5 ms-4">
          <img src={success}></img>
        </div>
        <Link to="/home"><div className= "modal-btn pt-5 mt-5 pb-3">

          <CustomButtons value={"Done"}/></div></Link>
        </div>
      

      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default Success
