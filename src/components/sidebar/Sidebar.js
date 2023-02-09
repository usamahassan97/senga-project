import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./sidebar.css";
import logo from "../../Assets/Images/logo.png";
import home from "../../Assets/Icons/home_icon.png";
import wallet from "../../Assets/Icons/wallet.png";
import invest from "../../Assets/Icons/invest.png";
import msg from "../../Assets/Icons/chat.png";
import bell from "../../Assets/Icons/bell.png";
import mark from "../../Assets/Icons/mark.png";
import { NavLink, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const Sidebar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [active, setActive] = useState("home");

  const handleClick = (item) => {
    setActive(item);
  };
  return (
    <div>
      <header>
        <Row>
          <Col>
            <Link to="/">
              <img src={logo} alt="" style={{ width: "132px" }} />
            </Link>
          </Col>

          <nav ref={navRef}>
            <div className="nav-link">
              <ul className="sidebar">
                <li
                  className={active === "home" ? "active" : ""}
                  onClick={() => handleClick("home")}
                >
                  <Row>
                    <Col className="col2">
                      <img className="icons" src={home} alt="" />
                    </Col>
                    <Col xs={9} className="col1">
                      {" "}
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                    </Col>
                  </Row>
                </li>

                <li
                  className={active === "wallet" ? "active" : ""}
                  onClick={() => handleClick("wallet")}
                >
                  <Row>
                    <Col className="col2">
                      <img className="icons" src={wallet} alt="" />
                    </Col>
                    <Col xs={9} className="col1">
                      <Link to="/wallet">Wallet</Link>
                    </Col>
                  </Row>
                </li>

                <li
                  className={active === "invest" ? "active" : ""}
                  onClick={() => handleClick("invest")}
                >
                  <Row>
                    <Col className="col2">
                      <img className="icons" src={invest} alt="" />
                    </Col>
                    <Col xs={9} className="col1">
                      <Link to="/invest">Invest</Link>
                    </Col>
                  </Row>
                </li>

                <li
                  className={active === "message" ? "active" : ""}
                  onClick={() => handleClick("message")}
                >
                  <Row>
                    <Col className="col2">
                      <img className="icons" src={msg} alt="" />
                    </Col>
                    <Col xs={9} className="col1">
                      <Link to="/message">Messages</Link>
                    </Col>
                  </Row>
                </li>

                <li className={active === "notification" ? "active" : ""}
                  onClick={() => handleClick("notification")}>
                  <Row>
                    <Col className="col2">
                      <img className="icons" src={bell} alt="" />
                    </Col>
                    <Col xs={9} className="col1">
                      <Link to="/notification">Notification</Link>
                    </Col>
                  </Row>
                </li>
              <li>

              <Row>
                <Col>
                  <a to="">
                    <img className="icon" src={mark} alt="" />
                  </a>
                </Col>
              </Row></li>
              </ul>
              <button
                className="nav-btn  nav-close-btn my-3"
                onClick={showNavbar}
              >
                <FaTimes />
              </button>
            </div>
          </nav>

          <Col style={{ textAlign: "end" }}>
            <button className="nav-btn  " onClick={showNavbar}>
              <FaBars />
            </button>
          </Col>
        </Row>
      </header>
    </div>
  );
};

export default Sidebar;
