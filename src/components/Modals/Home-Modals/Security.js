import React, { useState } from "react";

import {  Modal, ModalHeader, ModalBody } from "reactstrap";
import CustomButtons from "../../subComponents/customButtons";

import {
    
    FormGroup,
    Input,
    Label,
    
  } from "reactstrap";


const Security = (args) => {
  return (
    <div>
    <Modal centered {...args}>
    <ModalHeader className="border-0" toggle={args.toggle}>Security</ModalHeader>
      <ModalBody>
       <div>
          <div className="secure-form"><FormGroup className='pb-5'>
            <Label className="label_text mt-4 ">Select amount to buy for investment</Label>
                  <Input
                  
                    id="number"
                    name="number"
                    placeholder="$200"
                    className="input_style "
                  />
            </FormGroup></div>
        
          <CustomButtons value={"Next"}/>

          
      </div>

      </ModalBody>
      
    </Modal>
  </div>
  )
}

export default Security
