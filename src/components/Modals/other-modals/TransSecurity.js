import React, { useState } from "react";
import {Heading, Text } from "@chakra-ui/react";
import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";

import {
    
    FormGroup,
    Input,
    Label,
    
  } from "reactstrap";



const TransSecurity = (args) => {
  
  return (
    <div>
    <Modal centered {...args} className="p-3">
    <ModalHeader className="ps-5 pe-5 pt-5  border-0" toggle={args.toggle}><Heading as="h5" size="sm">Amount</Heading></ModalHeader>
      <ModalBody className="p-5">
       <div>
          <div className="secure-form"><FormGroup className='pb-2'>
            <Label className="label_text mt-4 ">Select amount to allocate to investment</Label>
                  <Input
                  
                    id="number"
                    name="number"
                    placeholder="$1000"
                    className="input_style "
                  />
            </FormGroup></div>
            <div className="secure-form"><FormGroup className='pb-5 pt-3'>
            <Label className="label_text mt-4 ">Select amount for monthly contributions (Not Compulsory)</Label>
                  <Input
                  
                    id="number"
                    name="number"
                    placeholder="$1000"
                    className="input_style "
                  />
            </FormGroup></div>
        
          <CustomButtons value={"Next"} onClick={handleClick}/>

          
      </div>

      </ModalBody>
      
    </Modal>
    
  </div>
  )
}

export default TransSecurity
