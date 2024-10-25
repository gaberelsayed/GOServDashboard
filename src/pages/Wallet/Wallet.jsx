import React from 'react'
import Helper from '../../components/Helper'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HeaderComponent from '../Products/component/HeaderComponent'
import ActiveSubscriptions from './Component/ActiveSubscriptions'
import BillingSettings from './Component/BillingSettings'
import Types from './Component/Types'
import Vervication from './Component/Vervication'
import PurchaseInvoices from './Component/PurchaseInvoices'

export default function Wallet({ darkMode, setDarkMode }) {
    return <>

        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""} w-full`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="mx-6 mt-28 w-full overflow-x-hidden mb-4 "
            >
                <HeaderComponent label=" المحفظة" />
                <main className='ms-6'>
                    <Vervication />
                    <Types />
                    <BillingSettings />
                    <ActiveSubscriptions />
                    <PurchaseInvoices />
                </main>
            </main>
        </div>
    </>
}
