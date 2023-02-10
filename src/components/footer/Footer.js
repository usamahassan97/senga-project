import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer pt-5">
      <Container className="all-list ">
        <Row>
          <Col>
            <div className="logo2">
              <img
                className="w-75 ps-4"
                src={logo}
                alt=""
              />{" "}
            </div>
            <div className="list text-left pt-4">
              <ul>
                <li className="pb-3">
                  <strong>Address and Contact</strong>
                </li>
                <li  className="pb-3">Address to physical office or quarters</li>
                <li  className="pb-3">Email Address</li>
                <li  className="pb-3">Phone Number</li>
              </ul>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="list mt-xs-5 mt-xs-4">
              <ul>
                <li className="pb-3">
                  <strong>Products</strong>
                </li>
                <li className="pb-3">Invest</li>
                <li className="pb-3">Save Pot</li>
                <li className="pb-3">Wallet</li>
              </ul>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="list">
              <ul>
                <li className="pb-3">
                  <strong>Company</strong>
                </li>
                <li className="pb-3">About</li>
                <li className="pb-3">FAQ</li>
              </ul>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="list">
              <ul>
                <li className="pb-3">
                  <strong>Legal</strong>
                </li>
                <li className="pb-3">Terms</li>
                <li className="pb-3">Privacy</li>
                <li className="pb-3">Security</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="list">
              <li className="pb-3 text-center" >
                <strong>Social</strong>
              </li>
              <div className="social text-center pt-4 pb-4 pe-5">
                <Row>
                  <Col>
                    <BsTwitter />
                  </Col>
                  <Col>
                    <BsFacebook />
                  </Col>
                  <Col>
                    <BsInstagram />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="last-para text-center ">
        Xenga is a purposeful Investing platform. we aim at getting people
        richer through investments in the easiest <br/> way possible to them. Grow
        wealth through us
      </div>
      <div className="copyRight text-center mt-5 pb-3" style={{color:"purple"}}><strong>Xenga @ 2022</strong>
      </div>
    </div>
  );
};

export default Footer;
