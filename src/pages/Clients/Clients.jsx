import React from "react";
import img from './../../assets/112e28edfaa501b1942f68247921fcec.png'
import "./Clients.css";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";
import HeaderComponent from "../Products/component/HeaderComponent";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiGroupLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BsMagic } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";

function Clients({ darkMode, setDarkMode }) {
  return (
    <div
      className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Helper />
      <main
        className={`
          w-full h-full m-10 pt-16
                    `} >
        <HeaderComponent headerLabel='العملاء' />
        <alert className=" bg-blue-200 flex flex-row items-center  rounded-md border w-full gap-2 p-3">
          <HiOutlineExclamationCircle />
          <p> تم جدولة إسناد العملاء  إلى هذه المجموعة , قد تستغرق العملية من 2-5 دقائق.</p>
        </alert>
        <div className="clients">
          <div className="flex flow-row ps-3 pt-3 gap-2 items-center ">

            <HiMiniUserGroup />
            <p>مجموعة العملاء</p>
            <span> ( 2 مجموعات)</span>
          </div>
          <div className="boxs flex flex-row items-center gap-6 pt-4" >
            <div className="all w-full flex gap-6 items-center flex-col justify-between rounded-md border p-3 cursor-pointer">
              <HiMiniUserGroup />
              <h3>جميع العملاء</h3>
              <h5> 129 عميل</h5>
            </div>
            <div className="first w-full flex gap-6 items-center flex-col justify-between rounded-md border p-3 cursor-pointer">
              <RiGroupLine />
              <h3> اول عميل</h3>
              <h5> 122 عميل</h5>
            </div>
            <div className="all w-full flex gap-4 items-center flex-col justify-between rounded-md border py-10 cursor-pointer">
              <FaPlus />
              <h3> مجموعة جديدة</h3>
            </div>
          </div>
        </div>
        <header className="pt-10 flex flex-row justify-between items-center ">
          <button className="flex flex-row gap-3 items-center bg-green-200 text-black border rounded-pill p-3">
            <span>
              <FaPlus />
            </span>
            عميل جديد
          </button>
          <div className="flex left">
            <button className="text-black flex flex-row gap-2 items-center ">
              <span>
                <CiFilter />
              </span>
              تصفية
            </button>
            <button className="text-black flex flex-row gap-2 items-center">
              <span>
                <IoBagRemoveOutline />
              </span>
              خدمات
            </button>
          </div>
        </header>
        <div className="table border rounded-md mt-4 ">
          <div className="head flex flow-row justify-between items-center bg-gray-100 p-3">
            <div className="flex flex-row gap-2 items-center">
              <input className=" w-4 h-4 " type="checkbox" name="all" id="all" />
              <div className="flex flow-row items-center gap-2">
                <span>
                  <RiGroupLine />
                </span>
                العملاء
              </div>
              (75 عميل)
            </div>
            <button className="text-black flex flex-row gap-2 items-center border rounded-md border-green-300 border-1">
              <span>
                <BsMagic />
              </span>
              تحرير سريع
            </button>

          </div>
          <div className="body flex flex-row gap-3 items-center justify-between p-3">
            <div className="right flex flex-row gap-3 items-center">
              <input className=" w-4 h-4 " type="checkbox" name="all" id="all" />
              <div className="img ">
                <img className="w-full h-16  rounded-full" src={img} alt="logo" />
              </div>
              <div className="label flex flex-col gap-2">
                <div className="text-capitalize name flex flow-row gap-2 items-center">
                  <h5>NAGAH MOHAMED</h5>
                  <h6 className="text-orange-300">جديد</h6>
                </div>
                <button className="text-black flex flex-row gap-2 items-center border rounded-md border-green-300 border-1">
                  <span>
                    <GrGroup />
                  </span>
                  اول طلب
                </button>
              </div>
            </div>
            <div className="left ">
              <h6>المدينة المنورة</h6>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Clients;
