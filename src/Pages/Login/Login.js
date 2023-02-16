import React from 'react'
import {  Row, Col, Button, Form, FormGroup, Input, Label, } from 'reactstrap';
import "../Login/login.css"
import google from "../../Assets/Images/icons_google.png"
import invest from "../../Assets/Images/invest.png"
import {  Container } from "@chakra-ui/react";
import TopRow from '../../components/subComponents/topRow';
import { Link } from "react-router-dom";
import CustomButtons from '../../components/subComponents/customButtons';

const Login = () => {
  return (
    
    <>
      <Container maxW="1300px">
        <div className='p-md-5'>
          <TopRow value={"Sign In"} />

          <Row className='mt-4'>
            <Col md={6}>
              <div className='text-center'>
                <Button className='google_btn'>
                  <Row><Col><img src={google} alt="" className='ms-md-3' /></Col><Col xs={11}><span className='ms-md-4 google_btn_text'>Sign Up with google</span></Col></Row>  </Button>
                <p className='text-center mt-5 text-uppercase'>or</p>
              </div>


              <Form className='mt-5'>
                <Row>
                  <FormGroup>
                    <Label className='label_text'>
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder='Type here'
                      className='input_style'
                    />

                    <Label className='label_text mt-4'>
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder='Type here'
                      className='input_style '
                    />
                  </FormGroup>
                  <p className='frg_pass_text mt-3'>Forget Password</p>
                </Row>
              </Form>
            </Col>
            <Col md={6}>
              <div className='image_wrapper img-fluid'>
                <img src={invest} alt="" className='side_images' />
              </div>
            </Col>
          </Row>

          <Row className='mt-5 mb-3'>
            <Col md={6}>
              <div className='text-center '>
                <p className='formal_text pb-3'>Don't have an account?<Link to= "/signup"> <span className='ms-md-3 sign_up_text'>Sign Up</span></Link></p>
                <Link to= "/home"><CustomButtons value={"Get Started"} /></Link>
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
    </>
  )
}

export default Login