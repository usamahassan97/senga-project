import React, { useState } from "react";
import {Heading, Text } from "@chakra-ui/react";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";

import {
    
    FormGroup,
    Input,
    Label,
    
  } from "reactstrap";
import Confirm from "./Confirm";


const Security = (args) => {
  
  return (
    <div>
    <Modal centered {...args} className="p-3">
    <ModalHeader className="ps-5 pe-5 pt-5  border-0" toggle={args.toggle}><Heading as="h5" size="sm">Account</Heading></ModalHeader>
      <ModalBody className="p-5">
       <div>
          <div className="secure-form"><FormGroup className='pb-5'>
            <Label className="label_text mt-4 ">Account Number</Label>
                  <Input
                  
                    id="number"
                    name="number"
                    placeholder="Fill here"
                    className="input_style "
                  />
            </FormGroup></div>
            <div className="mt-5">
            <FormGroup>
    <Label for="exampleSelect">
      Bank
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      
    </Input>
  </FormGroup>
            </div>
        
          <CustomButtons value={"Add Account"} onClick={handleClick}/>

          
      </div>

      </ModalBody>
      
    </Modal>
    
  </div>
  )
}

export default Security
