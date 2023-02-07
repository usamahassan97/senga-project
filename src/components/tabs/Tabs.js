import React, { useState } from "react";
import "./tab.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabledata = [
    {
      id: 1,
      value: "usama pagal hai",
      stats: "$3000",
    },
    {
      id: 2,
      value: "Portfolic gain",
      stats: <p style={{color:"green"}}>+500</p>,
    },
    {
      id: 3,
      value: "Monthly Cost & Charges",
      stats: "43%",
    },
    {
      id: 4,
      value: "Total Cost & Charges ",
      stats: "15%",
    },
  ];
  return (
    <div>
      <div className="tabs">
        <ul className="tabs-list">
          <li
            className={`tabs-list-item ${
              activeTab === 0 ? "tabs__item--active" : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            <a href="#" className="tabs-list-link active">
              <strong style={{ color: "purple", paddingLeft: "5px" }}>
                After 6 Months
              </strong>
            </a>
          </li>
          <li
            className={`tabs-list-item2 ${
              activeTab === 1 ? "tabs__item--active" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            <a href="#" className="tabs-list-link nonactive">
              <strong>After one year</strong>
            </a>
          </li>
        </ul>
        <div className="tabs-content">
          <div className="tabs-content-item">
            <div className="tabs__content">
              {activeTab === 0 && (
                <div>
                  <div className="table1">
                    <table>
                      <tbody>
                        {tabledata.map((table) => (
                          <tr key={table.id}>
                            <td className="td1" >{table.value}</td>
                            <td className="td2" >{table.stats}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 1 && <div>Content of Tab 3</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
