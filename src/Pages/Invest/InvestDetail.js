import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import bg from "../../Assets/Icons/bg_icon.png";
import Chart from "../../components/chart/Chart";
import Progress from "../../components/progress/Progress";
import Tabs from "../../components/tabs/Tabs";
import { NavLink } from "react-router-dom";

import Header from "../../components/Header/Header";
import { Card, Text, CardBody, Container, Heading } from "@chakra-ui/react";
import TopDetail from "../details/TopDetail";


const InvestDetail = () => {
  return (
    <Container maxW="900px">
      <div className="top ">
        <TopDetail />
      </div>

      <div className="cards">
        <Card className="card-detail" variant="elevated">
          <CardBody className="text-center">
            <div className="card-content1 pt-3 pb-3">
              <Text style={{ color: "#4FFB24" }}>+USD500 (18%)</Text>
              <Heading as="h4" size="md">
                $3000
              </Heading>
            </div>
            <div className="pb-3">
              {" "}
              <Chart />
            </div>
            <Row className="card-content">
              <Col lg={1} xs={16}>
                <img src={bg} alt="" />
              </Col>
              <Col>
                {" "}
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <div className="pt-3">
          <Card className="card-detail" variant="elevated">
            <CardBody>
              <div className="titl">
                <strong>Risk Level</strong>
              </div>
              <div className="risk pt-3">
                <strong style={{ color: "purple" }}>4</strong>Kg
              </div>
              <div className="para pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus expedita provident similique perspiciatis explicabo
                nihil deserunt fugiat ducimus a ex dolor sequi inventore,
              </div>
              <div className="progres pt-3 pb-3">
                <Progress />
              </div>
            </CardBody>
          </Card>
        </div>

        <div className=" pt-3 pb-5">
          <Card className="card-detail">
            <div className="card-title">
              <div className="top-head">
                <Row className="card-content">
                  <Col>
                    <strong>Projected Cost & Charges</strong>
                  </Col>
                  <Col style={{ textAlign: "end" }}>
                    {" "}
                    <strong>$3000</strong> Lorem ipsum dolor sit amet.
                  </Col>
                </Row>
              </div>
              <div className="tab">
                <Tabs />
              </div>
            </div>
          </Card>
        </div>
        <div className=" buttons d-flex pt-2 ">
          
          <div className="btns">
            <Button className="btn3 p-3 ps-5 pe-5"><Text>Start Investment</Text></Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default InvestDetail
