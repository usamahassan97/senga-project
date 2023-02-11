import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import TopRow from "../../components/subComponents/topRow";

import vector from "../../Assets/Icons/Vector.png";
import CustomButtons from "../../components/subComponents/customButtons";
import Side from "../../components/landingSide/Side";
import SkipButton from "../../components/subComponents/SkipButton";
import Progress from "../../components/progress/Progress";

const Risk = () => {
  return (
    <Container>
      <div className="p-md-2">
        <TopRow value={"Choose Investment"} />
      </div>
      <Row>
        <Col>
          <div className="mb-3 ">
            <img className="pe-3 d-lg-none d-md-none" src={vector} alt="" />{" "}
            <strong>Set Risk/Reward Balance</strong>
          </div>
          <div className="risk">
            <div className="risk-head">
              <p>Aim is to preserve capital & minimise potential of loss</p>
            </div>
            <div className="risk-btn ">
              <Row>
                <Col className="">
                  <button className="btn2-cash p-3 w-100 ">Low </button>
                </Col>
                <Col><button className="btn-cash p-3 w-100  ">Medium </button></Col>
                <Col>
                  <button className="btn2-cash p-3 w-100 ">High </button>
                </Col>
              </Row>
            </div>
            <div className="risk-value pt-2">
            <strong style={{ color: "purple", fontSize: "30px" }}>4</strong>/10
            </div>
            <div className="risk-values pt-2">
              <Row>
                <Col>Low risk</Col>
                <Col className="text-center">Medium risk</Col>
                <Col className="text-end">High risk</Col>
              </Row>
            </div>
            <div className="risk-progress pt-5">
              <Progress/>
            </div>
            <div className="risk-para  fs-7">
              <p>Typically, Most of tis portfolio will be invested in bonds, but almost half of the portfolio
will be invested in equities and other risky assets over certain periods.</p>
            </div>
          </div>
          <div className="Continue mt-5 pt-5  ">
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
  );
};

export default Risk;
