import React from "react";
import {  Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import TopRow from "../../components/subComponents/topRow";
import tick from "../../Assets/Icons/tick.png"
import vector from "../../Assets/Icons/Vector.png"
import CustomButtons from "../../components/subComponents/customButtons";
import Side from "../../components/landingSide/Side";
import SkipButton from "../../components/subComponents/SkipButton";
import {  Container } from "@chakra-ui/react";

const GInvestment = () => {
  return (
    <Container maxW="1200px">
      <div className="p-md-5">
        <TopRow value={"Choose Investment"} back={"Back"}/>
      </div>
      <Row>
        <Col>
          <div className="mb-5 pb-5">
           <img className="pe-3 d-lg-none d-md-none" src={vector} alt="" /> <strong>General Investment</strong>
            <div className="list-content pt-5 pb-5">
              <div className="one d-flex pb-2">
                <img className="pe-3 " src={tick} alt="" />500 USD  minimum investment
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3 " src={tick} alt="" />No maximum investment
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3" src={tick} alt="" />No set up or exit fees
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3" src={tick} alt="" />Designed for investing for a year period
              </div>
              <div className="one pt-3 d-flex pb-2">
                <img className="pe-3" src={tick} alt="" />Withdraw  anytime for maximum flexibility
              </div>
              <div className="one pt-3 d-flex ">
                <img className="pe-3" src={tick} alt="" />Choose from a range of risk levels
              </div>
            </div>
          </div>
          <div className="Continue mt-2 pt-5 pb-4 ">
            <div className="skip pb-3">
              <SkipButton value={"Skip"} />
            </div>
            <Link to="/home">
              <CustomButtons value={"Continue"} />
            </Link>
          </div>{" "}
        </Col>
        <Col className="side">
          <Side />
        </Col>
      </Row>
    </Container>
  )
}

export default GInvestment