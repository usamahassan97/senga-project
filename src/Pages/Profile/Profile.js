import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Button, Col, Row } from "reactstrap";
import HomeTop from "../../components/subComponents/homeTop";
import profile from "../../Assets/Icons/Bprofile.PNG";
import { Switch } from "@chakra-ui/react";
import vector from "../../Assets/Icons/Vector1.png";
import profile1 from "../../Assets/Icons/profile.png";
import bell from "../../Assets/Icons/bell.png";
import lock from "../../Assets/Icons/lock.png";
import card from "../../Assets/Icons/card.png";
import "./profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <Container maxW="900px">
      <div className="pt-5">
        <HomeTop head={"Profile"} />
      </div>
      <div className="pt-3">
        <Row>
          <Col className="mt-5 ">
            <a href="">Back</a>
          </Col>
          <Col className="pb-5 " xs={8}>
            <img className="ps-5 ms-3" src={profile}></img>
            <div className=" ps-4 ms-3">
              <Heading as="h1" size="md">
                Yande Stephens
              </Heading>
            </div>
          </Col>
        </Row>
      </div>
      <Container maxW="800px">
        <div>
          <Row>
            <Col>
              <strong>Show Dashboard Balances</strong>
            </Col>
            <Col className="text-end">
              <Switch size="md" />
            </Col>
          </Row>
        </div>
        <div className="pb-5 mb-5">
          <div className="pt-4">
            <Link to="/profileSetting">
              <Button className="btn4 w-100 pt-3 pb-3">
                <Row>
                  <Col xs={11} className="text-start d-flex">
                    <img className="ps-5" src={profile1}></img>
                    <Text
                      className="ps-5 "
                      style={{ fontSize: "20px ", color: "black" }}
                    >
                      Profile Settings
                    </Text>
                  </Col>
                  <Col>
                    <img className="pt-2" src={vector}></img>
                  </Col>
                </Row>
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <Link to="/notificationSetting">
              <Button className="btn4 w-100 pt-3 pb-3">
                <Row>
                  <Col xs={11} className="text-start d-flex">
                    <img className="ps-5" src={bell}></img>
                    <Text
                      className="ps-5 "
                      style={{ fontSize: "20px ", color: "black" }}
                    >
                      Notification Settings
                    </Text>
                  </Col>
                  <Col>
                    <img className="pt-2" src={vector}></img>
                  </Col>
                </Row>
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <Link to="/passwordSetting">
              <Button className="btn4 w-100 pt-3 pb-3">
                <Row>
                  <Col xs={11} className="text-start d-flex">
                    <img className="ps-5" src={lock}></img>
                    <Text
                      className="ps-5 "
                      style={{ fontSize: "20px ", color: "black" }}
                    >
                      Password Settings
                    </Text>
                  </Col>
                  <Col>
                    <img className="pt-2" src={vector}></img>
                  </Col>
                </Row>
              </Button>
            </Link>
          </div>
          <div className="pt-4">
          <Link to="/bankSetting">
            <Button className="btn4 w-100 pt-3 pb-3">
              <Row>
                <Col xs={11} className="text-start d-flex">
                  <img className="ps-5" src={card}></img>
                  <Text
                    className="ps-5 "
                    style={{ fontSize: "20px ", color: "black" }}
                  >
                    Card & Bank Settings
                  </Text>
                </Col>
                <Col>
                  <img className="pt-2" src={vector}></img>
                </Col>
              </Row>
            </Button>
            </Link>
          </div>
          <div className="pt-4">
            <Button className="btn4 w-100 pt-3 pb-3">
              <Row>
                <Col xs={11} className="text-start d-flex">
                  <img className="ps-5" src={profile1}></img>
                  <Text
                    className="ps-5 "
                    style={{ fontSize: "20px ", color: "black" }}
                  >
                    Log Out
                  </Text>
                </Col>
                <Col>
                  <img className="pt-2" src={vector}></img>
                </Col>
              </Row>
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Profile;
