import { GlobalConstants } from '@/components/abstract/global'
import React from 'react'

export default function ProductSummaryProperties() {
  return (
    <div data-testid='product-summary-properties'>


<h5>ویژگی ها</h5>

<ul style={{listStyle:'none'}}>
    <li><span style={{color:GlobalConstants.SECENDARY_CSS}}>جنس : </span> <span>طلا</span></li>

</ul>



    </div>
  )
}
