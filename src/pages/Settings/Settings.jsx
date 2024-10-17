import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Helper from '../../components/Helper'
import HeaderComponent from '../Products/component/HeaderComponent'
import { IoSettingsOutline } from 'react-icons/io5'
import { CiWarning } from 'react-icons/ci'

export default function Settings({ darkMode, setDarkMode }) {
    return <>

        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="mx-6 mt-28 w-full overflow-x-hidden mb-4 "
            >
                <HeaderComponent label="إعدادات المتجر" />
                <div className="mx-4 whitespace-nowrap">
                    <h1>إعدادات المتجر</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        
                    <div className="cursor-pointer flex flex-col items-center gap-2 border rounded-md p-10 xl:w-[100%] relative">
                        <warning className="absolute top-0 end-1 p-3 text-red-600">
                            <CiWarning className='text-2xl' />
                        </warning>
                        <IoSettingsOutline className='text-green-900 text-2xl' />
                        <h3 className='text-green-500'>الإعدادات الأساسية</h3>
                        <p className='text-gray-300'>الرابط, الشعار, الاسم, المقر</p>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center gap-2 border rounded-md p-10 xl:w-[100%] relative">
                        <warning className="absolute top-0 end-1 p-3 text-red-600">
                            <CiWarning className='text-2xl' />
                        </warning>
                        <IoSettingsOutline className='text-green-900 text-2xl' />
                        <h3 className='text-green-500'>الإعدادات الأساسية</h3>
                        <p className='text-gray-300'>الرابط, الشعار, الاسم, المقر</p>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center gap-2 border rounded-md p-10 xl:w-[100%] relative">
                        <warning className="absolute top-0 end-1 p-3 text-red-600">
                            <CiWarning className='text-2xl' />
                        </warning>
                        <IoSettingsOutline className='text-green-900 text-2xl' />
                        <h3 className='text-green-500'>الإعدادات الأساسية</h3>
                        <p className='text-gray-300'>الرابط, الشعار, الاسم, المقر</p>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center gap-2 border rounded-md p-10 xl:w-[100%] relative">
                        <warning className="absolute top-0 end-1 p-3 text-red-600">
                            <CiWarning className='text-2xl' />
                        </warning>
                        <IoSettingsOutline className='text-green-900 text-2xl' />
                        <h3 className='text-green-500'>الإعدادات الأساسية</h3>
                        <p className='text-gray-300'>الرابط, الشعار, الاسم, المقر</p>
                    </div>
                    </div>

                </div>
            </main>
        </div>
    </>
}