import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";
import success from "../../../Assets/Images/success1.PNG"



const ChoiceSource = (args) => {
  return (
    <div>
    <Modal centered {...args}>
      
      <ModalBody>
       <div>
        <div className=" pt-3 text-center">
          <h1>Transaction<br/>
Successful</h1>
        </div>
        <div className="pt-3 text-center">
          <img src={success}></img>
        </div>
          <div className= "modal-btn pt-5 mt-5 pb-3"><Row><Col>
          <button className="btn2-cash p-3 w-100 ">Back To Home </button></Col><Col><CustomButtons value={"View Deals"}/></Col></Row>

          </div>
      </div>

      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default ChoiceSource
