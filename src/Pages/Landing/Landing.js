import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../../components/Navbar/Navbar";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import phone from "../../Assets/Images/iPhone 13 Pro.png";
import rightImage from  "../../Assets/Images/rightSideImage.png"
import {   Heading } from "@chakra-ui/react";
import "./landing.css";
import Footer from "../../components/footer/Footer";
import { NavLink, Outlet } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <div className="navbar1">
        <Navbars />
      </div>
      <Container className="mt-5 ">
        <div className="first-part mt-5 ">
          <Row>
            <Col xs={12} lg={6} md={6} className="pt-5 text-xs-center">
            <div className="first-part-col1">
              <div className=" mt-5 mb-3 pl-3 ps-2">
                <Heading as="h1" size="xl">
                  Put Your Money
                  <br/>
                  to work through us.
                </Heading>
              </div>
              <div className="pra1 mt-5  ps-2">
                We are experts in helping you access financial tools<br/>
                
                that steadily grow your finances. Get richer<br/>
                
                by invesing through us with ease.
              </div>
              <div className="bton mt-5 mb-3 pt-3 pl-5 ps-2">
                <button className="btn3-new pt-3 pb-3 ps-5 pe-5" type="submit">
                  Create New Account
                </button>
              </div>
              <div className=" buttons2 d-flex pb-4 pt-3  mt-5 " >
                <div className="btns  p-2 mb-2 ">
                  
                  <button className="btn1-sign d-flex" type="submit">
                    <BsApple
                      className="pt-2 pb-2 fs-1"
                    />{" "}
                    <div className="pt-2">Soon On iPhone</div>
                  </button>
                </div>

                <div className="btns d-inline p-2  .d-sm-block ">
                  <button className="btn1-sign  d-flex " type="submit">
                    <FaGooglePlay
                      className="pt-2 pb-2 fs-1"
                    />
                    <div className="pt-2">Soon On Android</div>
                    
                  </button>
                </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6} >
              <div className="image mt-5 text-xs-center" >
                <img className="img1 w-100" src={phone} alt="" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="first-part mt-5 mb-3 ">
        <div className="d-flex ">
          <Row >
            <Col xs={12} lg={6} md={6}>
              
              <div className="text-xs-center pb-5 mb-5">
                <img
                  className="img2 w-100 "
                  src="https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1160&h=785&dpr=1"
                  alt=""
                />
                </div>
              
            </Col>
            <Col xs={12} lg={6} md={6} >
            <div className="first-part-col2 mt-5 ps-2 ">
              <div className="head2 mt-5">
                <Heading as="h1" size="xl">We manage the <br/>Investment for you</Heading>
              </div>
              <div className="pra2 mt-5">
                Our team make investing very easy as we save you stress of<br/>
                researching for investments, either low risk or high by<br/> looking
                after your investment.
              </div>
              <div className="bton2 mt-5">
                <button className="btn3-new " type="submit">
                  Start Investing
                </button>
              </div>
              </div>
            </Col>
          </Row>
          </div>
        </div>
        <div className="first-part mt-5 mb-3">
          <Row>
            
            <Col xs={12} lg={6} md={6} >
            <div className="first-part-col3 mt-5  text-xs-center">
              <div className="head1 mt-5">
              <Heading as="h1" size="xl">Seamless fund <br/> withdrawal</Heading>
              </div>
              <div className="pra1 mt-5">
                Transfer and withdraw funds from wallet <br/> and save pots for free
                at any time
              </div>
              <div className="bton mt-5 mb-3">
                <button className="btn3-new text-light bg-dark" type="submit">
                  Start Now
                </button>
              </div>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className="text-sm-center ">
                <img className="img1 pl-5 w-100" src={rightImage} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="foot">
        <Footer/>
      </div>
      
    </div>
    
  );
};

export default Landing;
