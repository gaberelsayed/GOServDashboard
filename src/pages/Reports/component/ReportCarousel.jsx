
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import icons
import { IoShirtOutline, IoWalletOutline } from 'react-icons/io5';
import { RiGroupLine } from 'react-icons/ri';
import { ImAttachment } from 'react-icons/im';
import { CiDeliveryTruck } from 'react-icons/ci';
import { LiaTrophySolid } from 'react-icons/lia';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';

export default function ReportCarousel() {
    const items = [
        { icon: <IoWalletOutline />, label: 'المبيعات', onClick: () => alert('clicked') },
        { icon: <IoShirtOutline />, label: 'المنتجات', onClick: () => alert('clicked') },
        { icon: <RiGroupLine />, label: 'العملاء', onClick: () => alert('clicked') },
        { icon: <ImAttachment />, label: 'الزيارات', onClick: () => alert('clicked') },
        { icon: <IoShirtOutline />, label: 'الاكثر طلبا', onClick: () => alert('clicked') },
        { icon: <IoShirtOutline />, label: 'الاكثر بحثا', onClick: () => alert('clicked') },
        { icon: <CiDeliveryTruck />, label: 'الدفع و الشحن', onClick: () => alert('clicked') },
        { icon: <LiaTrophySolid />, label: 'نظام الولاء', onClick: () => alert('clicked') },
        { icon: <MdOutlineLocalGroceryStore />, label: 'قنوات البيع', onClick: () => alert('clicked') },
    ];
    return <>
        <Swiper

            dir="rtl"
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination, Navigation]}
            className=' mySwiper'
        >

            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    <button
                        className='flex flex-row gap-3 text-black hover:border-green-300 border rounded-md  items-center'
                        onClick={item.onClick}
                    >
                        {item.icon}
                        <p>{item.label}</p>
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
}
