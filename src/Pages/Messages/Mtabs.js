import React , { useState } from 'react'
import { Container, Row } from "reactstrap";
import Inbox from './Inbox';
import "./mtabs.css"
import Newmessage from './Newmessage';
const Mtabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    
      <Row>

        {/* <div className="tabs"> */}
          <ul className="tabs__list">
            <li
              className={`tabs__item ${activeTab === 0 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(0)}
            ><hr className='line pb-3'/>
              Inbox
              
            </li>
            <li

              className={`tabs__item text-center ${activeTab === 1 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(1)}
            ><hr className='line pb-3'/>
             Sent
              
            </li>
            <li

              className={`tabs__item text-end pe-5 me-4 ${activeTab === 2 ? "tabs__item--active" : ""}`}
              onClick={() => handleTabClick(2)}
            ><hr className='line pb-3'/>
             Drafts
             
            </li>
           
          </ul>
          <div className="tabs__content">
            {activeTab === 0 && <div><Inbox/></div>}
            {activeTab === 1 && <div><Newmessage/></div>}
            {activeTab === 2 && <div>Content 245</div>}
          
          </div>
        {/* </div> */}
      </Row>
   
  )
}

export default Mtabs
