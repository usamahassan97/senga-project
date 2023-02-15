import React from "react";
import { Col, Row } from "react-bootstrap";
import { Heading, Link } from "@chakra-ui/react";
const TopDetail = () => {
  return (
    <div>
      <div className="top">
        <Row>
          <Col className="text-start">
            <Link color="teal.500" href="#">
              Back
            </Link>
          </Col>
          <Col xs={6} className="text-center">
            <Heading as="h4" size="md">
              Tim's Investment
            </Heading>
          </Col>
          <Col className="text-end">
            <Link color="teal.500" href="#">
              Edit Theme
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopDetail;
