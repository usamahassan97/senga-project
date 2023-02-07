import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="all-list">
        <Row>
          <Col>
            <div className="logo2">
              <img
                style={{ width: "130px", paddingBottom: "10px" }}
                src={logo}
                alt=""
              />{" "}
            </div>
            <div className="list">
              <ul>
                <li>
                  <strong>Address and Contact</strong>
                </li>
                <li>Address to physical office or quarters</li>
                <li>Email Address</li>
                <li>Phone Number</li>
              </ul>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="list">
              <ul>
                <li>
                  <strong>Products</strong>
                </li>
                <li>Invest</li>
                <li>Save Pot</li>
                <li>Wallet</li>
              </ul>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="list">
              <ul>
                <li>
                  <strong>Company</strong>
                </li>
                <li>About</li>
                <li>FAQ</li>
              </ul>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="list">
              <ul>
                <li>
                  <strong>Legal</strong>
                </li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="list">
              <li style={{ textAlign: "center" }}>
                <strong>Social</strong>
              </li>
              <div className="social">
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
      </div>
      <div className="last-para">
        Xenga is a purposeful Investing platform. we aim at getting people
        richer through investments in the easiest way possible to them. Grow
        wealth through us
      </div>
      <div className="copyRight"><strong>Xenga @ 2022</strong>
      </div>
    </div>
  );
};

export default Footer;
