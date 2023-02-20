import React from "react";
import { Row, Col, Button } from "reactstrap";
import profile from "../../Assets/Icons/profile.png";

import arrow from "../../Assets/Icons/up-arrow.png";
import wallet from "../../Assets/Icons/h-wallet.png";
import angle from "../../Assets/Icons/Vector1.png";
import vector from "../../Assets/Icons/Vector.png";
import "./home.css";
import Cards from "../../components/Card-home/Cards";

import {  Container, Heading } from "@chakra-ui/react";
import HomeTop from "../../components/subComponents/homeTop";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="900px">
      <div className="right-side-content mt-5">
        <HomeTop head={"Hi Yande,"}/>
        <div className="home-box  mt-5 pt-3 pb-3 ps-4 pe-4 ">
          <Row>
            <Col md={6} xs={12}>
              <div className="sec-one mt-3">
                <Row>
                  <Col className="text-end ps-2 pt-4">
                    <img src={arrow} alt="" />
                  </Col>
                  <Col xs={10} className="pe-5">
                    <p className="pb-2">Total Investment</p>
                    <Heading as="h2" size="lg" className="pb-2">
                      $10,000
                    </Heading>
                    <div className="sub-content pt-3 pb-2">
                      <Row
                        className="pe-2"
                        style={{ fontSize: "10px", color: "#FF85D5" }}
                      >
                        <Col>+$500 (18%)</Col>
                        <Col>+$20.55 (6%)</Col>
                      </Row>
                      <Row
                        className="pt-2"
                        style={{ fontSize: "10px", color: " #FFFFFF8C" }}
                      >
                        <Col>Total Gain/Loss </Col>
                        <Col>Today's Gain/Loss </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="sec-one mt-3">
                <Row>
                  <Col className="text-end wallet-img ps-2 pt-3">
                    <img style={{ color: "white" }} src={wallet} alt="" />
                  </Col>
                  <Col xs={10} className="pe-5">
                    <p className="pb-2">Total Assets</p>
                    <Heading as="h2" size="lg" className="pb-2">
                      $20,000
                    </Heading>
                    <div className="sub-content pt-3 pb-2">
                      <Row
                        className="pe-2"
                        style={{ fontSize: "10px", color: "#FF85D5" }}
                      >
                        <Col>+$10,000 (50%)</Col>
                        <Col>+$10,000</Col>
                      </Row>
                      <Row
                        className="pe-2"
                        style={{ fontSize: "10px", color: " #FFFFFF8C" }}
                      >
                        <Col>Cash Value </Col>
                        <Col>Invested Value </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="home-link text-end mt-4">
        <a href="">Fund Wallet</a>
      </div>
      <div className="card-head mt-4">
        <Row>
          <Col xs={10}>
            <Heading as="h4" size="md">Your Investment Pots</Heading>
          </Col>
          <Col className="text-end">
            <Row>
              <Col>
                <img className="pe-2 text-end" src={vector} alt="" />
              </Col>
              <Col>
                {" "}
                <img className="ps-2 text-start" src={angle} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="h-card mt-4">
        <Cards />
      </div>
      <div className="home-button">
        <Link to="/startInvest"><div className="btns text-start mt-5 pt-5 mb-5">
          <Button className="btn3 ps-5 pe-5 p-3">Create New Pot </Button>
        </div></Link>
      </div>
    </Container>
  );
};

export default Home;
