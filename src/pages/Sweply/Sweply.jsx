import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsSnapchat } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { FiTv } from 'react-icons/fi'
import Helper from '../../components/Helper'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HeaderComponent from '../Products/component/HeaderComponent'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import social from './../../assets/social.png'

export default function Sweply({ darkMode, setDarkMode }) {
    return <>

        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="mx-6 mt-28 overflow-x-hidden mb-4 w-full"
            >
                <HeaderComponent label=" إعلانات سويبلي" />
                <div className="mx-4 w-full">
                    <div className="flex flex-row justify-between w-full p-1 items-center">
                        <Dropdown className='text-center ' dir='rtl'>
                            <Dropdown.Toggle
                                className='text-black hover:bg-green-300 focus:bg-green-400 flex flow-row items-center gap-2 border  rounded-pill bg-green-200'
                                id="dropdown-basic">
                                <FaPlus />
                                انشاء حملة جديدة
                            </Dropdown.Toggle>

                            <Dropdown.Menu className=''>
                                <Dropdown.Item href="#/action-1" >
                                    <div className='  flex flex-row gap-1 items-center w-full'>

                                        <FiTv />
                                        شاهد
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" >
                                    <div className='  flex flex-row gap-1 items-center w-full'>

                                        <BsSnapchat />
                                        سناب شات
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className='text-black flex flex-row items-center gap-1'>
                            <IoSettingsOutline />
                            إعدادت الحملات
                        </button>
                    </div>
                    <div className="my-3 rounded-md overflow-hidden border">
                        <header className='p-6 bg-gray-200'>
                            الحملات الاعلانية
                        </header>
                        <body className='py-3'>

                            <div className="flex flex-row items-center border rounded-md gap-2">
                                <label htmlFor="search">
                                    <HiOutlineMagnifyingGlass />
                                </label>
                                <input className='w-full focus:outline-transparent p-2' type="search" name="search" id="search" />
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center w-full p-2">
                                <figure className=''>
                                <img className='w-full' src={social} alt="social" />

                                </figure>
                                <h4>أطلق إعلانات احترافية بأسهل طريقة</h4>
                                <p>أعلن لمتجرك على منصات مختلفة واوصل لجمهورك بدون مغادرة لوحة تحكم متجرك!</p>
                            </div>
                        </body>
                    </div>
                </div>
            </main>
        </div>
    </>
}