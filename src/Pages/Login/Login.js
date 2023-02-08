import React from 'react' 
import { Container, Row, Col, Button, Form, FormGroup, Input, Label,  } from 'reactstrap';
import "../Login/login.css"
import google from "../../Assets/Images/icons_google.png"
import invest from "../../Assets/Images/invest.png"
import logo from "../../Assets/Images/logo.png"
import TopRow from '../../components/subComponents/topRow';
import CustomButtons from '../../components/subComponents/customButtons';

const Login = () => {
  return (
    // <div className='Container1'>
    //   <Row><Col>
    //     <div className="sec1">
    //       <div className="head2" style={{ color: "purple", textAlign: "center" }}>
    //         <h2>Log In</h2>
    //       </div>
    //       <Button style={{ textAlign: "left", paddingLeft: "35px", paddingRight: "300px", backgroundColor: "white", color: "black", border: "1px solid grey" }}>
    //         <img style={{ paddingRight: "20px" }} src={google} alt="" />
    //         Sign up with Google
    //       </Button>
    //       <div className="or" style={{ textAlign: "center", padding: "20px" }}>
    //         Or
    //       </div>
    //       <Form>


    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="type here" />

    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="type here" />
    //         </Form.Group>
    //         <div className="forget" style={{ textAlign: "center", paddingBottom: "15 0px", paddingTop: "20px" }}>
    //           <a style={{ color: "red" }} href="">Forgot password</a>
    //         </div>
    //         <div className="opt" style={{ padding: "20px" }}>
    //           <Row><Col style={{ textAlign: "end" }}>Don’t Have an account?</Col><Col ><a style={{ color: "purple" }} href="">Sign Up</a></Col></Row>
    //         </div>
    //         <Button style={{ textAlign: "center", paddingLeft: "228px", paddingRight: "228px", backgroundColor: "purple", color: "white", border: "none" }} type="submit">
    //           Get Started
    //         </Button>
    //       </Form>
    //     </div>
    //   </Col>
    //     <Col>
    //       <div className="logo3">
    //         <img src={logo} alt="" />
    //       </div>
    //       <div style={{ padding: "10px", paddingLeft: "20px" }} >
    //         <img className="invest-pic" src={invest} alt="" />
    //       </div>
    //       <div className="last-line">
    //         <strong>Grow your wealth with us!</strong>
    //       </div>
    //     </Col></Row>

    // </div>
    <>
      <Container>
        <div className='p-md-5'>
          <TopRow value={"Login"} />

          <Row className='mt-4'>
            <Col md={6}>
              <div className='text-center'>
                <Button className='google_btn'> <img src={google} alt="" className='ms-md-3' /> <span className='ms-md-4 google_btn_text'>Sign Up with google</span></Button>
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
              <div className='text-center'>
                <p className='formal_text'>Don't have an account? <span className='ms-md-3 sign_up_text'>Sign Up</span></p>
                <CustomButtons value={"Get Started"} />
              </div>
            </Col>
            <Col md={6}>

            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Login