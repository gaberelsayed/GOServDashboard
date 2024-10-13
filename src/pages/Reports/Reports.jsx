import React from "react";
import "./Reports.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";
import HeaderComponent from "../Products/component/HeaderComponent";
import ReportCarousel from './component/ReportCarousel';
import SubReport from './component/SubReport';
import DateDropDown from './component/DropDown';
import { FiPrinter } from "react-icons/fi";
import { CiCircleQuestion, CiWavePulse1 } from "react-icons/ci";

function Reports({ darkMode, setDarkMode }) {
  return (
    <div
      className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Helper />
      <Sidebar />
      <main
        className={`
          w-full h-full m-10 pt-16
                    `} >
        <HeaderComponent headerLabel='التقارير' />
        {/* <CustomDatePicker/> */}
        <div className="Reports w-full  ">
          <div className="header flex flex-row justify-between items-center" >
            <DateDropDown />
            <button className="border rounded-md flex items-center p-2  text-black gap-2">
              <span>
                <FiPrinter />
              </span>
              طباعة</button>
          </div>
          <div className="reportType border rounded-md p-3 my-4">
            <h3 className="pb-3">نوع التقرير</h3>
            <ReportCarousel />
            <div className="dropdown flex flex-col my-16 gap-3">
              <h4>اختر التقرير الفرعي</h4>
              <div className="flex flex-row justify-between items-center gap-1 ">
                <SubReport />
                <button className="text-black px-10 p-2 border w-[25%] bg-green-200">عرض</button>
              </div>
            </div>
          </div>
          <div className="result border rounded-md my-4">
            <div className="header flex flex-row items-center p-3 bg-gray-100">
              <h3 className="gap-2">ملخص
                <span className="ps-3" >(يرجى ادراج سعر التكلفة  في بيانات المنتج , للاستفادة من التقرير  ولمعرفة  المنتجات  الاكثر ربحا)</span>
              </h3>
              <CiCircleQuestion className="text-green-400 text-2xl" />
            </div>
            <div className="body min-h-6 flex justify-center items-center p-6 flex-col gap-4">
              <CiWavePulse1 className="text-9xl rotate-180" />
              <p>لاتوجد بيانات كافيه</p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reports;
