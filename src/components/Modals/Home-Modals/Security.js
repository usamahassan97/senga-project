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
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
   const handleClick = () => {
     setModal(true)
   };
  return (
    <div>
    <Modal centered {...args} className="p-3">
    <ModalHeader className="ps-5 pe-5 pt-5  border-0" toggle={args.toggle}><Heading as="h5" size="sm">Security</Heading></ModalHeader>
      <ModalBody className="p-5">
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
        
          <CustomButtons value={"Next"} onClick={handleClick}/>

          
      </div>

      </ModalBody>
      
    </Modal>
    <Confirm isOpen={modal} toggle={toggle} />
  </div>
  )
}

export default Security
