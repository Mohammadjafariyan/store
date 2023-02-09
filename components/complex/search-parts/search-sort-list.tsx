
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import SearchTotal from './search-total';

export default function SearchSortList() {
    const [activeIndex, setActiveIndex] = useState(3);

    const arr =['مرتبط ترین' ,
'پربازدیدترین',
'جدیدترین',
'پرفروش ترین',
'ارزان ترین',
'گران ترین',
'سریع ترین ارسال',
'پیشنهاد خریداران',
'منتخب',
'',
];
    const items = [
        {label: 'مرتب سازی :', template:()=>{return <li className="" ><a className="p-menuitem-link" role="presentation"><span className="p-menuitem-icon pi pi-fw pi-sort-amount-down"></span><span className="p-menuitem-text">مرتب سازی :</span></a></li>}},
        {label: 'مرتبط ترین' },
        {label: 'جدیدترین'},
        {label: 'پرفروش ترین'},
        {label: 'ارزان ترین'},
        {label: 'گران ترین'},
        {label: 'سریع ترین ارسال'},
        {label: 'پیشنهاد خریداران'},
        {label: 'منتخب'},
        /* {label: 'تعداد کالا' , template:()=>{return (<SearchTotal/>)}}, */
    ];  

    return (
        <div className='sort-list-tape'>
            <TabMenu  style={{border:'none'}} model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}