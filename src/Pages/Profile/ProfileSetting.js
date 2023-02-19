import React from "react";
import HomeTop from "../../components/subComponents/homeTop";
import profile from "../../Assets/Icons/Bprofile.PNG";
import {
  Container,
  Heading,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { Button, Col, Row } from "reactstrap";
import plus from "../../Assets/Icons/editplus.png"
const ProfileSetting = () => {
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
            <div className="d-flex">
              <img className="ps-5 ms-3" src={profile}></img>
              <div
                style={{ color: "rgba(51, 51, 51, 0.5)" }}
                className="mt-5 d-flex pt-4"
              >
                <img style={{width:"20px", height:"20px "}}  className="me-2 mt-1" src={plus}></img>  Edit  Picture
              </div>
            </div>
            <div className=" ps-4 ms-3">
              <Heading as="h1" size="md">
                Yande Stephens
              </Heading>
            </div>
          </Col>
        </Row>
      </div>
      <Container className="mt-4 mb-4" maxW="750px">
        <div className="pt-2 pb-2">
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input style={{ color: "black" }} placeholder="Yande" size="lg" />
          </FormControl>
        </div>
        <div className="pt-3 pb-2">
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input style={{ color: "black" }} placeholder="Yande" size="lg" />
          </FormControl>
        </div>
        <div className="pt-3 pb-2">
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              style={{ color: "black" }}
              placeholder="Yandestephens@gmail.com"
              type="email"
              size="lg"
            />
          </FormControl>
        </div>
        <div className="pt-3 pb-2">
          <FormControl>
            <FormLabel>National Identification Number</FormLabel>
            <Input
              style={{ color: "black" }}
              placeholder="098976564567"
              size="lg"
            />
          </FormControl>
        </div>
      </Container>
      <div className="btns text-end mt-5  mb-5">
        <Button className="btn3 ps-5 pe-5 p-3">Update Profile </Button>
      </div>
    </Container>
  );
};

export default ProfileSetting;
