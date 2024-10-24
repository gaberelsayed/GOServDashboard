import React, { useState } from "react";
import "./HeaderComponent.css";
import { FaHome } from "react-icons/fa";
import Helper from "../../../components/Helper";


const HeaderComponent = () => {
  return (
    <>
      <div className="header-container-reports-comp">
        <div className="nav-items-reports" > 
          <FaHome className="nav-icon-reports"/>
          <span className="nav-item-home-reports">الرئيسية  </span>
          <span className="nav-item-reports">/ التقارير </span>
        </div>
        <div
          className="help-class-reports"  
        >
          <Helper />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
