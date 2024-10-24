import React, { useState } from "react";
import "./HeaderComponent.css";
import Helper from "../../../components/Helper";
import { FaHome } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <>
      <div className="header-container-client-comp">
        <div className="nav-items-client">
          <FaHome className="nav-icon-client" /> 
          <span className="nav-item-home-client">الرئيسية</span>
          <span className="nav-item-client"> / العملاء</span>
        </div>
          <div
          className="help-class-client"  
        >
          <Helper />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;