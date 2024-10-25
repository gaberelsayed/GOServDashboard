import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { BiLineChart } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { CiBullhorn, CiMusicNote1 } from 'react-icons/ci'
import { FaInstagram, FaPlus, FaSnapchat, FaTiktok, FaUserTie } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { HiOutlineMagnifyingGlass, HiOutlineTv } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { IoBookOutline, IoGameControllerOutline, IoPricetagOutline, IoStorefrontOutline } from 'react-icons/io5'
import { PiAirplane, PiForkKnifeLight, PiHeartbeat } from 'react-icons/pi'
import { TfiLightBulb } from 'react-icons/tfi'
import { Swiper, SwiperSlide } from 'swiper/react'
import Helper from '../../components/Helper'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HeaderComponent from '../Products/component/HeaderComponent'
import influencer from './../../assets/Influencers.png'
import person from './../../assets/person.png'
export default function Influencers({ darkMode, setDarkMode }) {
    return <>

        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="mx-6 mt-28 overflow-x-hidden mb-4 "
            >
                <HeaderComponent label=" المؤثرين" />
                <div className="mx-4 whitespace-nowrap">
                    <figure>
                        <img className='w-full' src={influencer} alt="influencer" />
                    </figure>
                    <div className="my-4">

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                            }}
                            slidesPerView={5}
                            spaceBetween={10}
                            loop={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            zoom={true}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            // modules={[Autoplay, Zoom, Navigation, Pagination]}
                            className="mySwiper rounded-md   "
                        >
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <IoStorefrontOutline />
                                        <h3>الكل</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <BsPeople />
                                        <h3>اطفال</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <GiPencilBrush />
                                        <h3>جمال وعناية</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <CiBullhorn />
                                        <h3>اخبار</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <HiOutlineTv />
                                        <h3>تقنية</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <BiLineChart />
                                        <h3>تطوير الإعمال</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <CiMusicNote1 />
                                        <h3>فنون</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <PiForkKnifeLight />
                                        <h3>طبخ وطعام</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <IoGameControllerOutline />
                                        <h3>ترفيه والعاب</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <TfiLightBulb />
                                        <h3>ديكور</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <FaUserTie />
                                        <h3>ازياء واناقة</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <PiHeartbeat />
                                        <h3>صحة ولياقة</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <IoBookOutline />
                                        <h3>كتب وتعليم</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-row cursor-pointer rounded-md justify-between p-2 border bg-[#004D5A] text-[#8AD6CF] font-bold">
                                    <div className="flex flex-col gap-6 justify-between">
                                        <PiAirplane />
                                        <h3>السفر والسياحة</h3>
                                    </div>
                                    <IoMdClose className='bg-red-800 rounded-full text-white text-xl' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="flex flex-row items-center border rounded-md my-16 gap-2">
                            <label htmlFor="search">
                                <HiOutlineMagnifyingGlass />
                            </label>
                            <input className='w-full focus:outline-transparent p-2' type="search" name="search" id="search" />
                        </div>
                        <div className="grid xl:grid-cols-3 gap-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                            <div className="cursor-pointer flex flow-row items-center gap-3 py-2 px-6 border rounded-md">
                                <figure className='rounded-full w-6 overflow-hidden'>
                                    <img className='w-full' src={person} alt="person" />
                                </figure>
                                <div className="flex flex-col gap-3 items-start">
                                    <h4 className='cursor-pointer hover:underline text-xl'>person1</h4>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaTiktok />
                                            <span>102k</span>
                                        </div>
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaSnapchat />
                                            <span>102k</span>
                                        </div>
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaInstagram />
                                            <span>102k</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-1 items-center">
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>اطفال</span>
                                        </div>
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>فنون</span>
                                        </div>
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>طبخ واطعام</span>
                                        </div>

                                        <OverlayTrigger
                                            className='bg-red-900 parent'
                                            placement="top"
                                            overlay={
                                                <div className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2" id="tooltip">
                                                    تقنية، فنون، صحة ولياقة، ديكور، أزياء وأناقة، ترفيه وألعاب
                                                </div>
                                            }>
                                            <div className="rounded-pill border p-1 flex flex-row items-center gap-1">
                                                <FaPlus />
                                                <span>5</span>
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer flex flow-row items-center gap-3 py-2 px-6 border rounded-md">
                                <figure className='rounded-full w-6 overflow-hidden'>
                                    <img className='w-full' src={person} alt="person" />
                                </figure>
                                <div className="flex flex-col gap-3 items-start">
                                    <h4 className='cursor-pointer hover:underline text-xl'>person1</h4>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaTiktok />
                                            <span>102k</span>
                                        </div>
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaSnapchat />
                                            <span>102k</span>
                                        </div>
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaInstagram />
                                            <span>102k</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-1 items-center">
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>اطفال</span>
                                        </div>
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>فنون</span>
                                        </div>
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>طبخ واطعام</span>
                                        </div>

                                        <OverlayTrigger
                                            className='bg-red-900 parent'
                                            placement="top"
                                            overlay={
                                                <div className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2" id="tooltip">
                                                    تقنية، فنون، صحة ولياقة، ديكور، أزياء وأناقة، ترفيه وألعاب
                                                </div>
                                            }>
                                            <div className="rounded-pill border p-1 flex flex-row items-center gap-1">
                                                <FaPlus />
                                                <span>5</span>
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer flex flow-row items-center gap-3 py-2 px-6 border rounded-md">
                                <figure className='rounded-full w-6 overflow-hidden'>
                                    <img className='w-full' src={person} alt="person" />
                                </figure>
                                <div className="flex flex-col gap-3 items-start">
                                    <h4 className='cursor-pointer hover:underline text-xl'>person1</h4>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaTiktok />
                                            <span>102k</span>
                                        </div>
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaSnapchat />
                                            <span>102k</span>
                                        </div>
                                        <div className="cursor-pointer flex flex-row gap-1 items-center">
                                            <FaInstagram />
                                            <span>102k</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-1 items-center">
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>اطفال</span>
                                        </div>
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>فنون</span>
                                        </div>
                                        <div className="rounded-pill hover:bg-green-200 hover:text-white cursor-pointer border p-1 flex flex-row items-center gap-1">
                                            <IoPricetagOutline />
                                            <span>طبخ واطعام</span>
                                        </div>

                                        <OverlayTrigger
                                            className='bg-red-900 parent'
                                            placement="top"
                                            overlay={
                                                <div className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2" id="tooltip">
                                                    تقنية، فنون، صحة ولياقة، ديكور، أزياء وأناقة، ترفيه وألعاب
                                                </div>
                                            }>
                                            <div className="rounded-pill border p-1 flex flex-row items-center gap-1">
                                                <FaPlus />
                                                <span>5</span>
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
}