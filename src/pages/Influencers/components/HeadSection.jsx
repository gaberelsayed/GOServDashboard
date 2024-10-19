import React from 'react';
import headImage from './HeadImage.png';
import {Button} from "react-bootstrap";
import "./HeadSection.css";
const HeadSection = () => {
  return (
    <>
      <div  className="head-container" style={{position:"relative"}}>
         <img src={headImage} alt=""/>
         <Button className="btn-filter" style={{position:"absolute" ,left:"10px"}}>
          <i className="sicon-filter icon-filter"></i> تصفية
        </Button>
      </div>
    </>
  );
}

export default HeadSection;
