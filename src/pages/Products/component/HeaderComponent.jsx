import React, { useState } from "react";
import "./HeaderComponent.css";
import HelpModal from "./modalsProduct/HelpModal";
import { FaHome } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Helper from "../../../components/Helper";

const HeaderComponent = () => {
  return (
    <>
      <div className="header-container-prd">
        <div className="nav-items">
          <FaHome className="nav-icon" />
          <span className="nav-item-home">الرئيسية</span>
          <span className="nav-item">/ المنتجات</span>
        </div>
        <div
          className="help-class"  
        >
          <Helper />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
