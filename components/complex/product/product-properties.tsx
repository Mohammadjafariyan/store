import { GlobalConstants } from '@/components/abstract/global'
import React from 'react'

export default function ProductProperties() {
    return (
        <div data-testid='ProductProperties'>

            <h4 className='product-article-header'>مشخصات</h4>

            <div className='row mt-4'>


                <div className='col-md-4'>

                    <table className='table table-bordered'>

                        <tbody>
                            <tr>
                                <td style={{ color: GlobalConstants.SECENDARY_CSS }}>جنس</td>
                                <td>طلا</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>



        </div>
    )
}
