import React from "react";
import Helper from "../../components/Helper";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeaderComponent from "../Products/component/HeaderComponent";
import "./Orders.css";
import { FaPlus } from "react-icons/fa";
import { BsCalendar2Plus } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import Slider from "./component/Slider";
import { PiMagicWand } from "react-icons/pi";
import { IoMdCloseCircleOutline  } from "react-icons/io";

function Orders({ darkMode, setDarkMode }) {
  return (
    <div className={`flex flex-wrap' gap-1 ${darkMode ? "#282828" : "transparent"}`}>
      <Sidebar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Helper />
      <main className={`
          my-24 px-4 w-full flex flex-col overflow-hidden
          `}>
        <HeaderComponent />
        <header className="flex flex-row justify-between  m-3">
          <div className="">
            <button className="flex flex-row  text-black items-center gap-2 rounded-pill px-10 bg-blue-400">
              <span> <FaPlus /> </span>
              طلب جديد
            </button>
          </div>
          <div className="flex flex-row">
            <button className=" text-black flex flex-row items-center gap-2">
              <span>
                <BsCalendar2Plus />
              </span>
              الحجوزات
            </button>
            <button className=" text-black flex flex-row items-center gap-2">
              <span>
                <CiFilter />
              </span>
              تصفية
            </button>
            <button className=" text-black flex flex-row items-center gap-2">
              <span>
                <IoBagRemoveOutline />
              </span>
              خدمات
            </button>
          </div>
        </header>
        <Slider />
        <div className="details border rounded-md mt-4 ">
          <div className="header flex flex-row justify-between bg-gray-100 px-2 py-1">
            <div className="start flex flex-row justify-between items-center gap-3">
              <input className="size-6" type="checkbox" name="resukt" id="result" />
              <h3 className="text-xl">الطلبات</h3>
              <div className="loading flex flex-row justify-between items-center cursor-pointer gap-2 bg-green-200 rounded-pill p-1">
                <h4>قيد التنفيذ</h4>
                <span>0</span>
                <IoMdCloseCircleOutline className="text-red-500 text-xl"  />
              </div>
            </div>
            <button className="text-black flex flex-row items-center gap-2 border border-2 border-green-900 rounded-md">
              <span> <PiMagicWand /> </span>
              تحرير سريع
            </button>
          </div>
          <div className="body py-4 px-2 cursor-pointer">
          <p>لا توجد طلبات بعد</p>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Orders;
