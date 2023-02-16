import React from "react";
import {  Row, Col, Label, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import TopRow from "../../components/subComponents/topRow";
import {  Container } from "@chakra-ui/react";
import vector from "../../Assets/Icons/Vector.png";
import CustomButtons from "../../components/subComponents/customButtons";
import Side from "../../components/landingSide/Side";
import SkipButton from "../../components/subComponents/SkipButton";

const Allocation = () => {
  return (
    <Container maxW="1200px">
      <div className="p-md-5">
        <TopRow value={"Choose Investment"} back={"Back"}/>
      </div>
      <Row>
        <Col>
          <div className="mb-2 ">
            <img className="pe-3 d-lg-none d-md-none" src={vector} alt="" />{" "}
            <strong>Choose amount to allocate to investment</strong>
          </div>
          <div className="allocate-head mb-5 ">
            Choose amount to allocate to your investment strategy from your
            deposit
          </div>
          <div className="form-allocate">
            <FormGroup className="mb-5 pb-5">
              <Label className="label_text">Amount</Label>
              <Input
                id="text"
                name="text"
                placeholder="$200"
                className="input_style"
              />

              <Label className="label_text mt-4 ">
                Monthly contribution if any
              </Label>
              <Input
                id="text"
                name="text"
                placeholder="$20"
                className="input_style "
              />
            </FormGroup>
          </div>
          <div className="Continue mt-5 pt-5 pb-5 ">
            <div className="skip pb-3 pt-5">
              <SkipButton value={"Skip"} />
            </div>
            <Link to="/home">
              <CustomButtons value={"Continue"} />
            </Link>
          </div>{" "}
        </Col>
        <Col className="side">
          <Side />
        </Col>
      </Row>
    </Container>
  );
};

export default Allocation;
