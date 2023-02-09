import React from "react";
import google from "../../Assets/Images/icons_google.png";
import invest from "../../Assets/Images/invest.png";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  
} from "reactstrap";
import "../Login/login.css";

import TopRow from "../../components/subComponents/topRow";
import CustomButtons from "../../components/subComponents/customButtons";

import "./signup.css";
const Signup = () => {
  return (
    <Container>
      <div className="p-md-5">
        <TopRow value={"Login"} />

        <Row className="mt-4">
          <Col md={6}>
            <div className="text-center">
              <Button className="google_btn">
                {" "}
                <img src={google} alt="" className="ms-md-3" />{" "}
                <span className="ms-md-4 google_btn_text">
                  Sign Up with google
                </span>
              </Button>
              <p className="text-center mt-3 text-uppercase">or</p>
            </div>

            <Form className="mt-3">
              <FormGroup>
                <Row>
                  <Col>
                    <Label>First Name</Label>
                    <Input className="input_style" placeholder="Type here" />
                  </Col>
                  <Col>
                    <Label>Last Name</Label>
                    <Input className="input_style" placeholder="Type here" />
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <FormGroup>
                  <Label className="label_text">National Identity Number</Label>
                  <Input
                    id="number"
                    name="number"
                    placeholder="Type here"
                    className="input_style"
                  />
                  <Label className="label_text">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Type here"
                    className="input_style"
                  />

                  <Label className="label_text mt-4">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Type here"
                    className="input_style "
                  />
                </FormGroup>
              </Row>
            </Form>
          </Col>
          <Col md={6}>
            <div className="image_wrapper1 img-fluid">
              <img src={invest} alt="" className="side_images" />
            </div>
          </Col>
        </Row>

        <Row className="mt-3 mb-3">
          <Col md={6}>
            <div className="text-center">
              <p className="formal_text">
                Already have an account?{" "}
                <Link to ="/login"> <span className="ms-md-3 sign_up_text">Sign In</span></Link>

              </p>
              <Link to ="/home"><CustomButtons value={"Get Started"} /></Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="side-text mt-3">
              <strong>Grow your wealth with us!</strong>
            </div>
          </Col>
        </Row>
      </div>
      
    </Container>
  );
};

export default Signup;
