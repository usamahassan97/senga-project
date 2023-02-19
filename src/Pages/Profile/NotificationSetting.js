import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Button, Col, Row } from "reactstrap";
import HomeTop from "../../components/subComponents/homeTop";
import { Switch } from "@chakra-ui/react";
const NotificationSetting = () => {
  return (
    <Container maxW="900px">
      <div className="pt-5">
        <HomeTop head={"Profile"} />
      </div>
      <div className="pt-5">
        <Row>
          <Col className=" ">
            <a href="">Back</a>
          </Col>
          <Col className="pb-5 " xs={8}>
            <div className=" ps-4 ms-3">
              <Heading as="h1" size="md">
                Notification Settings
              </Heading>
            </div>
          </Col>
        </Row>
      </div>
      <Container className="pt-5" maxW="750px">
        <div>
          <Row>
            <Col>
              <strong>Disable Email Notification</strong>
              <Text
                style={{ color: "grey", fontSize: "14px" }}
                className="pt-2"
              >
                Disable the platform from sending notificatons through mail
              </Text>
            </Col>
            <Col className="text-end">
              <Switch size="md" />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="btns text-end mt-5 pt-5 mb-5">
        <Button className="btn3 mt-5 ps-5 pe-5 p-3">Update Settings </Button>
      </div>
    </Container>
  );
};

export default NotificationSetting;
