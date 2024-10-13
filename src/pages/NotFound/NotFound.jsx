import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return <>
        <div className="w-full h-full">
            <h1 className='text-10xl'>4 0 4

                <span><CiShoppingBasket /></span>
            </h1>
            <h2>ناسف الرابط غير موجود</h2>
            <h3>الرابط المطلوب غير موجود</h3>
            <h4>من فضلك حاول مرة اخرى او تواصل مع الدعم الفني</h4>
            <Link to='/'>الذهاب للصفحة الرئيسية</Link>
        </div>
    </>
}
