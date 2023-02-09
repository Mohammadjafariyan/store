import React from 'react'
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';


export default function ProductLinkParts() {
  return (
    <div data-testid="product-link-parts">

<Tooltip target=".l1" />
<Tooltip target=".l2" />
<Tooltip target=".l3" />
<Tooltip target=".l4" />
<Tooltip target=".l5" />



<ul style={{listStyle:'none'}} className="product-link-parts">
    <li><a className='l1' data-pr-tooltip="اضافه به علاقه مندی" data-pr-position="left"  href='#'><i className="pi pi-heart" ></i></a></li>
    <li><a className='l2' data-pr-tooltip="اشتراک گذاری" data-pr-position="left"  href='#'><i className="pi pi-share-alt"></i></a></li>
    <li><a className='l3' data-pr-tooltip="اطلاع رسانی شگفت انگیز" data-pr-position="left"  href='#'><i className="pi pi-bell"></i></a></li>
    <li><a  className='l4' data-pr-tooltip="نمودار قیمت" data-pr-position="left" href='#'><i   className="pi pi-chart-bar"></i></a></li>
    <li><a  className='l5' data-pr-tooltip="مقایسه" data-pr-position="left"  href='#'><i className="pi pi-copy"></i></a></li>
</ul>


    </div>
  )
}
