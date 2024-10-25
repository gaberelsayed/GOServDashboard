import React from 'react'
import { IoMdRocket } from 'react-icons/io'
import Helper from '../../components/Helper'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HeaderComponent from '../Products/component/HeaderComponent'
import { BsGear } from 'react-icons/bs'

export default function Mobile({ darkMode, setDarkMode }) {
    return <>

        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="mx-6 mt-28 overflow-hidden mb-4 w-full"
            >
                <HeaderComponent label="  صانع التطبيقات " />
                <div className=" w-full">
                    <div className="border p-4 rounded-md flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <div className="logo bg-green-200 rounded-full p-3" >
                                <IoMdRocket className='text-3xl' />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3>أكمل بيانات تطبيقك</h3>
                                <h2>تطبيق</h2>
                                <p><span className='fw-bold'>10%</span> أضف البيانات الأساسية لتطبيقك لتدشينه لعملاء متجرك! يمكنك إضافة وحفظ البيانات كمسودة لاستكمالها لاحقًا.</p>
                            </div>
                        </div>
                        <button className='bg-green-200 px-4 text-green-700 hover:bg-green-400'>
                            إكمال بيانات التطبيق
                        </button>
                    </div>
                    <div className="border rounded-md my-4">
                        <header className='p-3 bg-gray-50 flex flex-row justify-between items-center'>
                            <h3>تصميم التطبيق</h3>
                            <div className="flex flow-row items-center gap-2">
                                <p className='bg-gray-200 rounded-pill px-1'>بيانات قابلة للتعديل</p>
                                <BsGear className='text-green-400' />
                            </div>
                        </header>
                        <body className='p-4'>
                            <div className="flex flex-row gap-2 items-center">
                                <p>القالب المستخدم:</p>
                                <h4>الافتراضي </h4>
                                <button className='outline-green-200 border px-4 text-black'>تغيير</button>
                            </div>
                        </body>
                    </div>
                </div>
            </main>
        </div>
    </>
}