import React from "react";
import logo from "../../Assets/Images/logo.png";
import {Link} from "react-router-dom"
import { Col, Row } from "reactstrap";
import "../custom-style.css";

const TopRow = (props) => {
  return (
    <>
      <Row>
        <Col md={6} sm={12}>
          <div>
            <img src={logo} alt="" className="logo_setting lg_screen" />
          </div>
          
           
            <div className="text-center mt-4">
            <Row>
            <Col>
              <div className="text-start">
                <Link className=" back-btn " to="">{props.back}</Link>
              </div>
            </Col>
            <Col xs={10}>
            <p className="headings">{props.value}</p>
            </Col>
          </Row>
          </div>
           
         
        </Col>

        <Col md={6}>
          
             
              <div className="text-end">
                <img src={logo} alt="" className="logo_setting mbl_screen" />
              </div>
            
        </Col>
      </Row>
    </>
  );
};

export default TopRow;
