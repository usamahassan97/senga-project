import React, {useState} from "react";
import {  Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import TopRow from "../../components/subComponents/topRow";
import {  Container } from "@chakra-ui/react";
import vector from "../../Assets/Icons/Vector.png";
import CustomButtons from "../../components/subComponents/customButtons";
import Side from "../../components/landingSide/Side";
import SkipButton from "../../components/subComponents/SkipButton";
import Progress from "../../components/progress/Progress";
import CreditDetail from "../../components/Modals/CreditDetail";
import Success from "../../components/Modals/Home-Modals/Success";
import Security from "../../components/Modals/Home-Modals/Security";
import Confirm from "../../components/Modals/Home-Modals/Confirm";

const Risk = () => {
  const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
  const handleClick = () => {
    setModal(true)
  };
  return (
    <Container maxW="1200px">
      <div className="p-md-2">
        <TopRow value={"Choose Investment"} back={"Back"}/>
      </div>
      <Row>
        <Col>
          <div className="mb-3 ">
            <img className="pe-3 d-lg-none d-md-none" src={vector} alt="" />{" "}
            <strong>Set Risk/Reward Balance</strong>
          </div>
          <div className="risk">
            <div className="risk-head pb-3">
              <p>Aim is to preserve capital & minimise potential of loss</p>
            </div>
            <div className="risk-btn ">
              <Row>
                <Col className="">
                  <button className="btn2-cash p-3 w-100 ">Low </button>
                </Col>
                <Col>
                  <button className="btn-cash p-3 w-100  ">Medium </button>
                </Col>
                <Col>
                  <button className="btn2-cash p-3 w-100 ">High </button>
                </Col>
              </Row>
            </div>
            <div className="risk-value pt-2">
              <strong style={{ color: "purple", fontSize: "30px" }}>4</strong>
              /10
            </div>
            <div className="risk-values pt-2">
              <Row>
                <Col>Low risk</Col>
                <Col className="text-center">Medium risk</Col>
                <Col className="text-end">High risk</Col>
              </Row>
            </div>
            <div className="range pt-3">
              <input type="range" className="form-range" id="customRange1" />
            </div>
            <div className="risk-progress pt-3">
              <Progress />
            </div>
            <div className="risk-para  ">
              <p>
                Typically, Most of tis portfolio will be invested in bonds, but
                almost half of the portfolio will be invested in equities and
                other risky assets over certain periods.
              </p>
            </div>
          </div>
          <div className="Continue mt-5 mb-5 ">
            <div className="skip pb-2">
              <SkipButton value={"Skip"} />
            </div>
            
              <CustomButtons  value={"Continue"} onClick={handleClick}  />
            
          </div>{" "}
        </Col>
        <Col className="side">
          <Side />
        </Col>
      </Row>
      <Confirm isOpen={modal} toggle={toggle} />
    </Container>
  );
};

export default Risk;
