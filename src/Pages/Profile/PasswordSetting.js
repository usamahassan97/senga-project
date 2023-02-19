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

const PasswordSetting = () => {
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
              Password Settings
            </Heading>
          </div>
        </Col>
      </Row>
    </div>
    <Container className="mt-4 mb-4" maxW="750px">
      <div className="pt-2 pb-2">
        <FormControl>
          <FormLabel>Old Password</FormLabel>
          <Input style={{ color: "black" }} type="password" size="lg" />
        </FormControl>
      </div>
      <div className="pt-5 pb-2">
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input style={{ color: "black" }} type="password" size="lg" />
        </FormControl>
      </div>
      <div className="pt-5 pb-2">
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            style={{ color: "black" }}
            
            type="password"
            size="lg"
          />
        </FormControl>
      </div>
      
    </Container>
    <div className="btns text-end mt-5 pt-5 mb-5">
      <Button className="btn3 ps-5 pe-5 p-3">Update Settings</Button>
    </div>
  </Container>
  )
}

export default PasswordSetting
