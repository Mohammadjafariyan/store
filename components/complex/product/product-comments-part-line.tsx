
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

export default function ProductCommentsPartLine() {
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
        {label: 'مشخصات' },
        {label: 'دیدگاه ها'},
        {label: 'پرسش ها'}
        /* {label: 'تعداد کالا' , template:()=>{return (<SearchTotal/>)}}, */
    ];  


    const onTabChange =(e:any)=>{
        console.log(e);
        setActiveIndex(e.index);

        window.location.hash = "c-" + (e.index + 1);

    }

    return (
        <div className='sort-list-tape' data-testid='ProductCommentsPartLine'> 
            <TabMenu   style={{border:'none'}} model={items} activeIndex={activeIndex}
            onTabChange={(e) => onTabChange(e)} />
        </div>
    )
}