import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import google from "../../Assets/Images/icons_google.png"
import invest from "../../Assets/Images/invest.png"
import logo from "../../Assets/Images/logo.png"
import "./signup.css"
const Signup = () => {
  return (
    <div className='Container1'>
      <Row><Col>
      <div className="sec1">
        <div className="head2" style={{color:"purple", textAlign:"center"}}>
          <h2>Sign Up</h2>
        </div>
        <Button style={{textAlign:"left", paddingLeft:"35px", paddingRight:"300px", backgroundColor:"white",color:"black", border:"1px solid grey"}}>
        <img style={{paddingRight:"20px"}} src={google} alt="" />
        Sign up with Google
      </Button>
      <div className="or" style={{textAlign:"center", padding:"20px"}}>
        Or
      </div>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="type here" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="type here" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>National Identity Number</Form.Label>
        <Form.Control type="number" placeholder="type here" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="type here" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="type here" />
      </Form.Group>
      <div className="opt" style={{padding:"20px"}}>
        <Row><Col style={{textAlign:"end"}}>Already Have an account?</Col><Col ><a style={{color:"purple"}} href="">Login</a></Col></Row>
      </div>
      <Button style={{textAlign:"center", paddingLeft:"228px", paddingRight:"228px", backgroundColor:"purple",color:"white", border:"none"}} type="submit">
        Get Started
      </Button>
    </Form>
        </div>
      </Col>
      <Col>
      <div className="logo3">
        <img src={logo} alt="" />
      </div>
      <div style={{padding:"10px", paddingLeft:"20px"}} >
        <img className="invest-pic" src={invest} alt="" />
      </div>
      <div className="last-line">
        <strong>Grow your wealth with us!</strong>
      </div>
      </Col></Row>
      
    </div>
  )
}

export default Signup