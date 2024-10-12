
/*

                    <row className=" border rounded-md flex flex-col cursor-pointer py-2 px-3 box-content">
                        <div className=" flex justify-between pb-4 px-1 ">
                            <IoIosCloseCircle className="text-xl" />
                            <IoTrashBinOutline className="text-xl" />
                        </div>
                        <div className="flex flex-row-reverse justify-between py-2 ">
                            <h3 className="flex flex-row">
                                محذوف
                                <span>
                                    <GoDotFill className="text-red-600 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
*/
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './../Orders.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { IoIosCloseCircle } from 'react-icons/io';
import { IoTrashBinOutline } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import { PiWatchLight } from 'react-icons/pi';
import { CiDeliveryTruck, CiStopwatch } from 'react-icons/ci';
import { FiGift } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { TbXboxX } from 'react-icons/tb';
import { RiExchangeDollarFill, RiMoneyDollarBoxLine } from 'react-icons/ri';
import { GrPowerCycle } from 'react-icons/gr';

export default function App() {
    return (
        <>

            <Swiper
                dir="rtl"
                slidesPerView={6}
                spaceBetween={200}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper h-auto"

                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        pagination: {
                            clickable: false, // Disable pagination for larger screens
                        },
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <IoTrashBinOutline className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <h3 className="flex flex-row-reverse">
                                محذوف
                                <span>
                                    <GoDotFill className="text-red-600 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <PiWatchLight className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <h3 className="flex flex-row-reverse">
                                بانتظار الدفع
                                <span>
                                    <GoDotFill className="text-red-600 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <CiStopwatch className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                بانتظار المراجعة
                                <span>
                                    <GoDotFill className=" text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <FiGift className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                قيد التنفيذ
                                <span>
                                    <GoDotFill className="text-blue-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <FaCheck className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                تم التنفيذ
                                <span>
                                    <GoDotFill className="text-green-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <CiDeliveryTruck className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                جاري التوصيل
                                <span>
                                    <GoDotFill className="text-green-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <HiOutlineArchiveBox className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                تم التوصيل
                                <span>
                                    <GoDotFill className="text-green-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <HiOutlineArchiveBox className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                تم الشحن
                                <span>
                                    <GoDotFill className="text-green-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <TbXboxX className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                ملغي
                                <span>
                                    <GoDotFill className="text-red-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <RiExchangeDollarFill className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                مسترجع
                                <span>
                                    <GoDotFill className="text-red-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <GrPowerCycle className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                قيد الاسرجاع
                                <span>
                                    <GoDotFill className="text-red-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                <SwiperSlide>
                    <row className=" border rounded-md flex flex-col cursor-pointer justify-between p-2 w-[200px] h-[80px] box-content">
                        <div className=" flex justify-between pb-6">
                            <RiMoneyDollarBoxLine className="text-xl" />
                            <IoIosCloseCircle className="text-xl" />
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="flex flex-row-reverse whitespace-nowrap">
                                طلب عرض سعر
                                <span>
                                    <GoDotFill className="text-orange-500 text-xl" />
                                </span>
                            </h3>
                            <h4>0</h4>
                        </div>
                    </row>
                </SwiperSlide>
                {/* <SwiperSlide></SwiperSlide> */}
            </Swiper>
        </>
    );
}
