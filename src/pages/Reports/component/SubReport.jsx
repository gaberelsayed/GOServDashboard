import Dropdown from 'react-bootstrap/Dropdown';
import { LuFileSpreadsheet } from 'react-icons/lu';

function SubReport() {
    return (
        <Dropdown className='w-full '>
            <Dropdown.Toggle className='flex items-center justify-between gap-4 w-full border rounded-md bg-transparent text-black' id="dropdown-basic">
                <span className=" flex items-center gap-3">
                    <LuFileSpreadsheet />
                    ملخص

                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu dir='ltr' className='w-full '>
                <Dropdown.Item href="#/action-1">ملخص</Dropdown.Item>
                <Dropdown.Item href="#/action-2">مبيعات المنتجات</Dropdown.Item>
                <Dropdown.Item href="#/action-3">مبيعات التصنيفات </Dropdown.Item>
                <Dropdown.Item href="#/action-3">مبيعات الماركات </Dropdown.Item>
                <Dropdown.Item href="#/action-3">مبيعات الاكواد </Dropdown.Item>
                <Dropdown.Item href="#/action-3">مبيعات كوبونات التخفيض </Dropdown.Item>
                <Dropdown.Item href="#/action-3">مبيعات المدن </Dropdown.Item>
                <Dropdown.Item href="#/action-3">مبيعات الفروع </Dropdown.Item>
                <Dropdown.Item href="#/action-3">خيارات المنتجات  </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SubReport;