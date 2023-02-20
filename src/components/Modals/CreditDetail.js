import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {Heading, Text } from "@chakra-ui/react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomButtons from "../subComponents/customButtons";
import { Link } from "react-router-dom";
import Success from "./Success";


const CreditDetail = (args) => {
  const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
  const handleClick = () => {
    setModal(true)
  };
  return (
    <>
    <div>
      <Modal centered {...args}>
        <ModalHeader className="border-0" toggle={args.toggle}> <Heading as="h5" size="sm">Enter Card Details</Heading></ModalHeader>
        <ModalBody>
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>0000 0000 0000 0000</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">Card Number</label>
          </div>
          <div className="pt-3">
            <Row>
              <Col>
                <form class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputValue"
                    placeholder="MM/YY"
                    value="MM/YY"
                  />
                  <label for="floatingInputValue">Card Expiry</label>
                </form>
              </Col>
              <Col>
                <form class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInputValue"
                    placeholder="123"
                    value="123"
                  />
                  <label for="floatingInputValue">Cvv</label>
                </form>
              </Col>
            </Row>
            <div className= "modal-btn pt-3 pb-3">

          <CustomButtons value={"PAY USD 1,000"} onClick={handleClick}/></div>
          </div>
          <div className="pt-3 pb-5 text-center">
            <a className="border-0 text-dark" href="">Save Card</a>
          </div>

        </ModalBody>
        
      </Modal>
    </div>
    <Success isOpen={modal} toggle={toggle} /></>
  );
};

export default CreditDetail;
