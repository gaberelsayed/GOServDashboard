
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCalendarDate } from 'react-icons/bs';

function DateDropDown() {
    return (
        <Dropdown className='w-fusll '>
            <Dropdown.Toggle className='flex items-center justify-between gap-4 w-full border rounded-md bg-transparent text-black' id="dropdown-basic">
                <div className="flex items-center gap-2">
                    <span className="spanIcson">
                        <BsCalendarDate />
                    </span>
                    تاريخ التقرير
                </div>

                <span className='px-3'>|</span>
                <span> October 4, 2021 - October 10, 2021</span>
            </Dropdown.Toggle>

            <Dropdown.Menu dir='ltr' className='w-full '>
                <Dropdown.Item href="#/action-1">اليوم</Dropdown.Item>
                <Dropdown.Item href="#/action-2"> بالامس</Dropdown.Item>
                <Dropdown.Item href="#/action-4"> الاسبوع الماضي </Dropdown.Item>
                <Dropdown.Item href="#/action-5"> الشهر الماضي </Dropdown.Item>
                <Dropdown.Item href="#/action-6"> هذا الشهر </Dropdown.Item>
                <Dropdown.Item href="#/action-7">السنة الحالية   </Dropdown.Item>
                <Dropdown.Item href="#/action-8">   السنة الماضية</Dropdown.Item>
                <Dropdown.Item href="#/action-9">  منذ البداية</Dropdown.Item>
                <Dropdown.Item href="#/action-10">  تحديد الفترة </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DateDropDown;