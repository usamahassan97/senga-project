import React from 'react'
import {
  
    Row,
    Col,
    
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  import {  Container, Heading } from "@chakra-ui/react";
const SecondPage = () => {
  return (
    <div>
      <div className="mb-5 pt-3 pot-to-head">
              
              <strong>Customize Investment</strong>
            </div>
            <div className="pot-form">
              <FormGroup className="mb-3" >
                <Label>Pot Name</Label>
                <Input
                  id="text"
                  name="text"
                  placeholder="Type here"
                  className="input_style"
                />
                </FormGroup>
                <FormGroup className="mb-3" >
                <Label>Time frame (Length of time to leave money invested)</Label>
                <Input className="input_style" type="select" placeholder="Type here" >
                  <option className="text-end" >6 months</option>
                  
                </Input>
              </FormGroup>
              <Row>
              <Label>Additional Monthly Contribution (Optional)</Label>
                <Col><FormGroup className="mb-3" >
                
                <Input className="input_style" type="select" placeholder="Type here" >
                  <option className="text-end" >DOB</option>
                  
                </Input>
              </FormGroup></Col>
              <Col><FormGroup className="mb-3" >
                
                <Input className="input_style" type="select" placeholder="Type here" >
                  <option className="text-end" >hours</option>
                  
                </Input>
                
              </FormGroup></Col>
              </Row>
              <Row>
              <Label>Starting Year(Optional)</Label>
                <Col><FormGroup className="mb-3" >
                
                <Input className="input_style" type="select" placeholder="Type here" >
                  <option className="text-end" >yyyy</option>
                  
                </Input>
              </FormGroup></Col>
              <Col></Col>
              </Row>
              </div>
    </div>
  )
}

export default SecondPage
