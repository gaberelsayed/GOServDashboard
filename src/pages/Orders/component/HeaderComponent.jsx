import React, { useState } from "react";
import "./HeaderComponent.css";
import { FaHome } from "react-icons/fa";
import Helper from "../../../components/Helper";

const HeaderComponent = () => {
  return (
    <>
      <div className="header-container-orders-comp">
        <div className="nav-items-orders" > 
          <FaHome className="nav-icon-orders"/>
          <span className="nav-item-home-orders">الرئيسية  </span>
          <span className="nav-item-orders">/ الطلبات</span>
        </div>
        <div
          className="help-class-orders"  
        >
          <Helper />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
