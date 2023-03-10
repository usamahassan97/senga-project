import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {Heading, Text } from "@chakra-ui/react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CustomButtons from "../subComponents/customButtons";
import { Link } from "react-router-dom";
import Security from "./Home-Modals/Security";


const CreditDetail = (args) => {
  const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
  const handleClick = () => {
    setModal(true)
  };
  return (
    <>
    <div>
      <Modal centered {...args}  className="p-3">
        <ModalHeader className="ps-5 pe-5 pt-5 border-0" toggle={args.toggle}> <Heading as="h5" size="sm">Enter Card Details</Heading></ModalHeader>
        <ModalBody className="p-5">
          <div class="form-floating pb-4">
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
          <div className=" pb-3 text-center">
            <a className="border-0 text-dark" href="">Save Card</a>
          </div>

        </ModalBody>
        
      </Modal>
    </div>
    <Security isOpen={modal} toggle={toggle} /></>
  );
};

export default CreditDetail;
