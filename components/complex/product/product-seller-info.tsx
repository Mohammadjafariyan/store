import { Badge, Group } from '@mantine/core'
import { Card } from 'primereact/card'
import React from 'react'
import { Avatar } from 'primereact/avatar';
import { GlobalConstants } from '@/components/abstract/global';
import ProductAddToCart from './product-add-to-cart';

export default function ProductSellerInfo() {
  return (
    <div data-testid="ProductSellerInfo">


<Card style={{backgroundColor:GlobalConstants.SECENDARY_CARD_CSS}}>

<Group>
<p><span><i className='pi pi-shield '></i></span></p>
<p>  <span> گارانتی اصالت و سلامت فیزیکی کالا</span></p>
</Group>
<Group>
<p><span><i className='pi pi-briefcase '></i></span></p>
<p style={{color:'green'}}>  <span> موجود در انبار</span></p>
</Group>

<Group>
<h5>قیمت:</h5>
<h5>  <span>  ۴۳۹,۰۰۰ </span> تومان</h5>
<h5 style={{ color:'rgb(157 157 157)', textDecoration:'line-through' , fontWeight:'lighter'}}>  <span>  ۷۷۵,۰۰۰ </span> تومان</h5>
<h5 > <Avatar label="43%"  style={{ backgroundColor: GlobalConstants.PRIMARY_CSS, color: '#ffffff' }} shape="circle" />
 </h5>
</Group>


<hr/>
<ProductAddToCart/>

</Card>

    </div>
  )
}
