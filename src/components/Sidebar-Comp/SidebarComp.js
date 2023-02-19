import React, { useState } from "react";
import "../Sidebar-Comp/sideComp.css";
import logo from "../../Assets/Images/logo.png";
import home from "../../Assets/Icons/home_icon.png";
import wallet from "../../Assets/Icons/wallet.png";
import invest from "../../Assets/Icons/invest.png";
import chat from "../../Assets/Icons/chat.png";
import bell from "../../Assets/Icons/bell.png";
import mark from "../../Assets/Icons/mark.png";
import {Link} from "react-router-dom"

const SidebarComp = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <>
      <div className="sidebar_wrapper">
        <div className="logo_wrapper">
          <img src={logo} className="logo_style" />
        </div>

        <div className="elements_parent">
        <Link to="/"><div className="child_element">
        <div>
              <img src={home} className="icons_" />
            </div>
            <div className="ms-4">
              <p
                className={`element_text ${
                  activeItem === "Home" ? "active_class" : ""
                }`}
                onClick={() => handleItemClick("Home")}
              >
                Home
              </p>
            </div>
          </div></Link>

          <Link to="/wallet"><div className="child_element">
           <div>
              <img src={wallet} className="icons_" />
            </div>
            <div className="ms-4">
              <p className={`element_text ${
                  activeItem === "wallet" ? "active_class" : ""
                }`}
                onClick={() => handleItemClick("wallet")}>Wallet</p>
            </div>
          </div></Link>

          <Link to="/home-Investment"><div className="child_element">
          <div>
              <img src={invest} className="icons_" />
            </div>
            <div className="ms-4">
              <p className={`element_text ${
                  activeItem === "invest" ? "active_class" : ""
                }`}
                onClick={() => handleItemClick("invest")}>Invest</p>
            </div>
          </div></Link>

          <Link to="/message"><div className="child_element">
          <div>
              <img src={chat} className="icons_" />
            </div>
            <div className="ms-4">
              <p className={`element_text ${
                  activeItem === "message" ? "active_class" : ""
                }`}
                onClick={() => handleItemClick("message")}>Messages</p>
            </div>
          </div></Link>

          <Link to="/notification"><div className="child_element">
          <div>
              <img src={bell} className="icons_" />
            </div>
            <div className="ms-4">
              <p className={`element_text ${
                  activeItem === "notification" ? "active_class" : ""
                }`}
                onClick={() => handleItemClick("notification")}>Notifications</p>
            </div>
          </div></Link>

          <div className="child_icons mt-5">
            <img src={mark} style={{ height: "48px", width: "48px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarComp;
