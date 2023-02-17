

import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

export default function CommentsSort() {
    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'مرتب سازی :', template:()=>{return <li className="" ><a className="p-menuitem-link" role="presentation"><span className="p-menuitem-icon pi pi-fw pi-sort-amount-down"></span><span className="p-menuitem-text">مرتب سازی :</span></a></li>}},
        {label: 'جدیدترین'},
        {label: 'دیدگاه خریداران'},
        {label: 'مفید ترین'}
        /* {label: 'تعداد کالا' , template:()=>{return (<SearchTotal/>)}}, */
    ];  

    return (
        <div className='sort-list-tape comments-sort' data-testid='CommentsSort'>
            <TabMenu  style={{border:'none'}} model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}