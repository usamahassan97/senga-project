import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbars from "../../components/Navbar/Navbar";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import phone from "../../Assets/Images/iPhone 13 Pro.png";
import rightImage from  "../../Assets/Images/rightSideImage.png"
import "./landing.css";
import Footer from "../../components/footer/Footer";
const Landing = () => {
  return (
    <div>
      <div className="navbar1">
        <Navbars />
      </div>
      <div className="Container1">
        <div className="first-part">
          <Row>
            <Col>
            <div className="first-part-col1">
              <div className="head1">
                <h1>
                  Put Your Money
                  <br/>
                  to work through us.
                </h1>
              </div>
              <div className="pra1">
                We are experts in helping you access financial tools
                
                that steadily grow your finances. Get richer
                
                by invesing through us with ease.
              </div>
              <div className="bton">
                <button className="btn3-new " type="submit">
                  Create New Account
                </button>
              </div>
              <div className=" buttons2 d-flex" role="search">
                <div className="btns">
                  <button className="btn1-sign " type="submit">
                    <BsApple
                      style={{
                        paddingBottom: "5px",
                        fontSize: "25px",
                        paddingRight: "5px",
                      }}
                    />{" "}
                    Soon On iPhone
                  </button>
                </div>

                <div className="btns">
                  <button className="btn1-sign " type="submit">
                    <FaGooglePlay
                      style={{
                        paddingBottom: "5px",
                        fontSize: "25px",
                        paddingRight: "5px",
                      }}
                    />
                    Soon On Android
                  </button>
                </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="image">
                <img className="img1" src={phone} alt="" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="first-part">
        <div >
          <Row>
            <Col>
              
              <div className="text-xs-center">
                <img
                  className="img2"
                  src="https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1160&h=585&dpr=1"
                  alt=""
                />
                </div>
              
            </Col>
            <Col >
            <div className="first-part-col2">
              <div className="head2">
                <h1>We manage the Investment for you</h1>
              </div>
              <div className="pra2">
                Our team make investing very easy as we save you stress of
                researching for investments, either low risk or high by looking
                after your investment.
              </div>
              <div className="bton2">
                <button className="btn3-new " type="submit">
                  Start Investing
                </button>
              </div>
              </div>
            </Col>
          </Row>
          </div>
        </div>
        <div className="first-part">
          <Row>
            
            <Col >
            <div className="first-part-col3">
              <div className="head1">
                <h1>Seamless fund withdrawal</h1>
              </div>
              <div className="pra1">
                Transfer and withdraw funds from wallet and save pots for free
                at any time
              </div>
              <div className="bton">
                <button className="btn3-new " type="submit">
                  Start Now
                </button>
              </div>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <img className="img1" src={rightImage} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="foot">
        <Footer/>
      </div>
    </div>
  );
};

export default Landing;
