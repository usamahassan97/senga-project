import React from "react";
import { Row, Col, Button, Container } from "reactstrap";
import profile from "../../Assets/Icons/profile.png";
import Sidebar from "../../components/sidebar/Sidebar";
import arrow from "../../Assets/Icons/up-arrow.png";
import wallet from "../../Assets/Icons/wallet.png";
import angle from "../../Assets/Icons/angle.png"
import vector from "../../Assets/Icons/Vector.png"
import "./home.css";
import Cards from "../../components/Card-home/Cards";
import TopBar from "../../components/subComponents/topBar";

const Home = () => {
  return (
    <Container className="p-3 ps-3 pe-3">
     
          <div className="right-side-content mt-5">
            <div className="top-content">
              <Row>
                <Col>
                  <h1>Hi Yande,</h1>
                </Col>
                <Col className="text-end  ">
                  <img src={profile} alt="" />
                </Col>
              </Row>
            </div>
            <div className="home-box mt-5 ">
              <Row>
                <Col md={6} xs={12}>
                  <div className="sec-one mt-3">
                    <Row>
                      <Col className="text-end ps-2 pt-4">
                        <img src={arrow} alt="" />
                      </Col>
                      <Col xs={9} className="pe-5">
                        <p>Total Investment</p>
                        <h2>$10,000</h2>
                        <div className="sub-content pb-4">
                          <Row style={{ fontSize: "10px", color: "#FF85D5" }}>
                            <Col>+$500 (18%)</Col>
                            <Col>+$20.55 (6%)</Col>
                          </Row>
                          <Row
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
                      <Col xs={9} className="pe-5">
                        <p>Total Assets</p>
                        <h2>$20,000</h2>
                        <div className="sub-content pb-4">
                          <Row style={{ fontSize: "10px", color: "#FF85D5" }}>
                            <Col>+$10,000 (50%)</Col>
                            <Col>+$10,000</Col>
                          </Row>
                          <Row
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
              <Col>
                <strong>Your Investment Pots</strong>
              </Col>
              <Col className="text-end">
                <img className="pe-3" src={vector} alt="" />
                <img className="ps-3" src={angle} alt="" />
              </Col>
            </Row>
          </div>
          <div className="h-card mt-2">
            <Cards />
          </div>
          <div className="home-button">
            <div className="btns text-start mt-5 pt-3">
              <Button className="btn3">Fund Investment</Button>
            </div>
          </div>
       

    </Container>

  );
};

export default Home;
