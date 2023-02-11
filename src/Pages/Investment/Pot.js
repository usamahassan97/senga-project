import React from "react";
import {
  Container,
  Row,
  Col,
  Select,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import TopRow from "../../components/subComponents/topRow";

import vector from "../../Assets/Icons/Vector.png";
import CustomButtons from "../../components/subComponents/customButtons";
import Side from "../../components/landingSide/Side";
import SkipButton from "../../components/subComponents/SkipButton";

const Pot = () => {
  return (
    <>
      <Container>
        <div className="p-md-4">
          <TopRow value={"Choose Investment"} />
        </div>
        <Row>
          <Col>
            <div className="mb-5 pot-to-head">
              <img className="pe-3 d-lg-none d-md-none" src={vector} alt="" />{" "}
              <strong>Customize your investment pot to your taste</strong>
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
            <div className="Continue mt-5  ">
              <div className="skip pb-3">
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
    </>
  );
};

export default Pot;
