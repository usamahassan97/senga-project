import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import Profile from "../../Assets/Icons/profile.png"
import Detail from "../../Pages/details/Detail";
import "./header.css"
const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Container>
      <Row>

        {/* <div className="tabs"> */}
          <ul className="tabs__list">
            <li
              className={`tabs__item ${activeTab === 0 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              Details
            </li>
            <li

              className={`tabs__item ${activeTab === 1 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Holdings
            </li>
            <li

              className={`tabs__item ${activeTab === 2 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Pending Deals
            </li>
            <li
              style={{ textAlign: "center" }}
              className={`tabs__item ${activeTab === 3 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <img src={Profile} alt="" />
            </li>
          </ul>
          <div className="tabs__content">
            {activeTab === 0 && <div><Detail /></div>}
            {activeTab === 1 && <div>Content of Tab 2</div>}
            {activeTab === 2 && <div>Content of Tab 3</div>}
            {activeTab === 3 && <div>Content of Tab 4</div>}
          </div>
        {/* </div> */}
      </Row>
    </Container>
  );
};

export default Header;
