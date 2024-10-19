import React from "react";
import "./HeaderComponent.css";
import { FaHome } from "react-icons/fa";
import Helper from "../../../components/Helper";

const HeaderComponent = () => {
  return (
    <>
      <div className="header-container-inf" style={{width:"98%"}}>
        <div className="nav-items-inf">
          <FaHome className="nav-icon-inf"/>
          <span className="nav-item-home-inf">الرئيسية</span>
          <span className="nav-item-inf">/ المؤثرين</span>
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
