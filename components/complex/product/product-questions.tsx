import { GlobalConstants } from '@/components/abstract/global'
import React, { Component } from 'react'

export default class ProductQuestions extends Component {
  render() {
    return (
      <div data-testid='ProductQuestions'>



<div className='row mt-4'>

    <h4>پرسش ها</h4>

    <div className='col-md-4'>
        
<table className='table table-bordered'>

<tbody>
    <tr>
        <td style={{color:GlobalConstants.SECENDARY_CSS}}>جنس</td>
        <td>طلا</td>
    </tr>
</tbody>

</table>
    </div>
</div>


      </div>
    )
  }
}
