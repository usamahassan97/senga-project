import React from "react";
import {  Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import TopRow from "../../components/subComponents/topRow";
import {  Container } from "@chakra-ui/react";
import CustomButtons from "../../components/subComponents/customButtons";
import Side from "../../components/landingSide/Side";
import SkipButton from "../../components/subComponents/SkipButton";
import "./cash.css";
const CashInvestment = () => {
  return (
    <Container maxW="1200px">
      <div className="p-md-5">
        <TopRow value={"Cash Deposite"} />
      </div>
      <Row>
        <Col>
          <div className="mb-5 pb-3 mt-3 mb-5 pb-5">
            <Card body className="card-cash mb-3">
              <div className="cardbody">
                <strong>General Investment</strong>
                <div className=" mt-3 ">
                  <p className="cash-para ">
                    A flexible, taxable investment account. Easy to use for
                    investments not held in ISAs or Pension
                  </p>
                </div>

                <div className="link-card text-end ">
                  <button className="btn-cash p-2 ps-3 pe-3">select</button>
                </div>
              </div>
            </Card>
            <Card body className="card2 card-cash mb-5 pb-3">
              <div className="vcard-body ">
                <strong>General Investment</strong>
                <div className=" mt-3">
                  <p className="cash-para">
                    Make the most of your allowance & maximise your tax free
                    returns
                  </p>
                </div>

                <div className="link-card text-end pt-4">
                  <button className="btn2-cash p-2 ps-3 pe-3">select</button>
                </div>
              </div>
            </Card>
          </div>
          <div className="Continue mt-5 pt-5 mb-5 ">
            <div className="skip pb-3">
              <SkipButton value={"Skip"} />
            </div>
            <Link to="/deposit">
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

export default CashInvestment;
